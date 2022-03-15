<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-7 ml-lg-auto">
          <div class="payment h-100 d-flex flex-column">
            <div>
              <h1 class="title mb-5">
                {{ $t('payment.title') }} <span class="line"></span>
              </h1>
              <!-- PRICE -->
              <div class="row">
                <div class="col-md-4">
                  <label>{{ $t('payment.amount') }} :</label>
                </div>
                <div class="col-md-8">
                  <p v-if="offer === 'free'" class="price">
                    <span v-if="plan === 'CV Expert'">4,90 € *</span>
                    <span v-if="plan === 'Achat Solo'">29,90 €</span>
                  </p>
                  <p v-if="offer === 'paid'" class="price">
                    <span>4,90 € *</span>
                  </p>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-4">
                  <label>{{ $t('payment.cardType') }} :</label>
                </div>
                <div class="col-md-8">
                  <div class="custom-form-group">
                    <span class="radioContainer">
                      <input
                        type="radio"
                        id="mastercard"
                        name="radio-group"
                        value="mastercard"
                        checked=""
                      />
                      <label for="mastercard">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxnPiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjQwIiB3aWR0aD0iNjgiIHk9Ii0xIiB4PSItMSIvPiA8L2c+IDxnPiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPiAgPHBhdGggaWQ9InN2Z180IiBmaWxsPSIjRkZCNjAwIiBkPSJtNjQuNSwxOC44OTkyOGMwLDEwLjQgLTguNCwxOC45IC0xOC45LDE4LjljLTEwLjQsMCAtMTguOSwtOC41IC0xOC45LC0xOC45bDAsMGMwLC0xMC40IDguNCwtMTguOSAxOC44LC0xOC45YzEwLjYsMCAxOSw4LjUgMTksMTguOWMwLDAgMCwwIDAsMHoiLz4gIDxwYXRoIGlkPSJzdmdfNyIgZmlsbD0iI0Y3OTgxRCIgZD0ibTQ1LjYsLTAuMDAwNzJjMTAuNCwwIDE4LjksOC41IDE4LjksMTguOWMwLDAgMCwwIDAsMGMwLDEwLjQgLTguNCwxOC45IC0xOC45LDE4LjljLTEwLjQsMCAtMTguOSwtOC41IC0xOC45LC0xOC45Ii8+ICA8cGF0aCBpZD0ic3ZnXzEwIiBmaWxsPSIjRkY4NTAwIiBkPSJtNDUuNiwtMC4wMDA3MmMxMC40LDAgMTguOSw4LjUgMTguOSwxOC45YzAsMCAwLDAgMCwwYzAsMTAuNCAtOC40LDE4LjkgLTE4LjksMTguOSIvPiAgPHBhdGggaWQ9InN2Z18xMyIgZmlsbD0iI0ZGNTA1MCIgZD0ibTIwLjIsLTAuMDAwNzJjLTEwLjMsMC4xIC0xOC43LDguNSAtMTguNywxOC45YzAsMTAuNCA4LjQsMTguOSAxOC45LDE4LjljNC45LDAgOS4zLC0xLjkgMTIuNywtNC45bDAsMGwwLDBjMC43LC0wLjYgMS4zLC0xLjMgMS45LC0ybC0zLjksMGMtMC41LC0wLjYgLTEsLTEuMyAtMS40LC0xLjlsNi43LDBjMC40LC0wLjYgMC44LC0xLjMgMS4xLC0ybC04LjksMGMtMC4zLC0wLjYgLTAuNiwtMS4zIC0wLjgsLTJsMTAuNCwwYzAuNiwtMS45IDEsLTMuOSAxLC02YzAsLTEuNCAtMC4yLC0yLjcgLTAuNCwtNGwtMTEuNiwwYzAuMSwtMC43IDAuMywtMS4zIDAuNSwtMmwxMC40LDBjLTAuMiwtMC43IC0wLjUsLTEuNCAtMC44LC0ybC04LjgsMGMwLjMsLTAuNyAwLjcsLTEuMyAxLjEsLTJsNi43LDBjLTAuNCwtMC43IC0wLjksLTEuNCAtMS41LC0ybC0zLjcsMGMwLjYsLTAuNyAxLjIsLTEuMyAxLjksLTEuOWMtMy4zLC0zLjEgLTcuOCwtNC45IC0xMi43LC00LjljMCwtMC4yIDAsLTAuMiAtMC4xLC0wLjJ6Ii8+ICA8cGF0aCBpZD0ic3ZnXzE2IiBmaWxsPSIjRTUyODM2IiBkPSJtMS41LDE4Ljg5OTI4YzAsMTAuNCA4LjQsMTguOSAxOC45LDE4LjljNC45LDAgOS4zLC0xLjkgMTIuNywtNC45bDAsMGwwLDBjMC43LC0wLjYgMS4zLC0xLjMgMS45LC0ybC0zLjksMGMtMC41LC0wLjYgLTEsLTEuMyAtMS40LC0xLjlsNi43LDBjMC40LC0wLjYgMC44LC0xLjMgMS4xLC0ybC04LjksMGMtMC4zLC0wLjYgLTAuNiwtMS4zIC0wLjgsLTJsMTAuNCwwYzAuNiwtMS45IDEsLTMuOSAxLC02YzAsLTEuNCAtMC4yLC0yLjcgLTAuNCwtNGwtMTEuNiwwYzAuMSwtMC43IDAuMywtMS4zIDAuNSwtMmwxMC40LDBjLTAuMiwtMC43IC0wLjUsLTEuNCAtMC44LC0ybC04LjgsMGMwLjMsLTAuNyAwLjcsLTEuMyAxLjEsLTJsNi43LDBjLTAuNCwtMC43IC0wLjksLTEuNCAtMS41LC0ybC0zLjcsMGMwLjYsLTAuNyAxLjIsLTEuMyAxLjksLTEuOWMtMy4zLC0zLjEgLTcuOCwtNC45IC0xMi43LC00LjljMCwwIC0wLjEsMCAtMC4xLDAiLz4gIDxwYXRoIGlkPSJzdmdfMTkiIGZpbGw9IiNDQjIwMjYiIGQ9Im0yMC40LDM3Ljc5OTI4YzQuOSwwIDkuMywtMS45IDEyLjcsLTQuOWwwLDBsMCwwYzAuNywtMC42IDEuMywtMS4zIDEuOSwtMmwtMy45LDBjLTAuNSwtMC42IC0xLC0xLjMgLTEuNCwtMS45bDYuNywwYzAuNCwtMC42IDAuOCwtMS4zIDEuMSwtMmwtOC45LDBjLTAuMywtMC42IC0wLjYsLTEuMyAtMC44LC0ybDEwLjQsMGMwLjYsLTEuOSAxLC0zLjkgMSwtNmMwLC0xLjQgLTAuMiwtMi43IC0wLjQsLTRsLTExLjYsMGMwLjEsLTAuNyAwLjMsLTEuMyAwLjUsLTJsMTAuNCwwYy0wLjIsLTAuNyAtMC41LC0xLjQgLTAuOCwtMmwtOC44LDBjMC4zLC0wLjcgMC43LC0xLjMgMS4xLC0ybDYuNywwYy0wLjQsLTAuNyAtMC45LC0xLjQgLTEuNSwtMmwtMy43LDBjMC42LC0wLjcgMS4yLC0xLjMgMS45LC0xLjljLTMuMywtMy4xIC03LjgsLTQuOSAtMTIuNywtNC45YzAsMCAtMC4xLDAgLTAuMSwwIi8+ICA8cGF0aCBpZD0ic3ZnXzIzIiBmaWxsPSIjRkZGRkZGIiBkPSJtMjcuMSwyMy42OTkyOGwwLjMsLTEuN2MtMC4xLDAgLTAuMywwLjEgLTAuNSwwLjFjLTAuNywwIC0wLjgsLTAuNCAtMC43LC0wLjZsMC42LC0zLjVsMS4xLDBsMC4zLC0xLjlsLTEsMGwwLjIsLTEuMmwtMiwwYzAsMCAtMS4yLDYuNiAtMS4yLDcuNGMwLDEuMiAwLjcsMS43IDEuNiwxLjdjMC42LDAgMS4xLC0wLjIgMS4zLC0wLjN6Ii8+ICA8cGF0aCBpZD0ic3ZnXzI2IiBmaWxsPSIjRkZGRkZGIiBkPSJtMjcuOCwyMC40OTkyOGMwLDIuOCAxLjksMy41IDMuNSwzLjVjMS41LDAgMi4xLC0wLjMgMi4xLC0wLjNsMC40LC0xLjljMCwwIC0xLjEsMC41IC0yLjEsMC41Yy0yLjIsMCAtMS44LC0xLjYgLTEuOCwtMS42bDQuMSwwYzAsMCAwLjMsLTEuMyAwLjMsLTEuOGMwLC0xLjMgLTAuNywtMi45IC0yLjksLTIuOWMtMi4xLC0wLjIgLTMuNiwyIC0zLjYsNC41em0zLjUsLTIuOWMxLjEsMCAwLjksMS4zIDAuOSwxLjRsLTIuMiwwYzAsLTAuMSAwLjIsLTEuNCAxLjMsLTEuNHoiLz4gIDxwYXRoIGlkPSJzdmdfMjkiIGZpbGw9IiNGRkZGRkYiIGQ9Im00NCwyMy42OTkyOGwwLjQsLTIuMmMwLDAgLTEsMC41IC0xLjcsMC41Yy0xLjQsMCAtMiwtMS4xIC0yLC0yLjNjMCwtMi40IDEuMiwtMy43IDIuNiwtMy43YzEsMCAxLjgsMC42IDEuOCwwLjZsMC4zLC0yLjFjMCwwIC0xLjIsLTAuNSAtMi4zLC0wLjVjLTIuMywwIC00LjYsMiAtNC42LDUuOGMwLDIuNSAxLjIsNC4yIDMuNiw0LjJjMC44LDAgMS45LC0wLjMgMS45LC0wLjN6Ii8+ICA8cGF0aCBpZD0ic3ZnXzMyIiBmaWxsPSIjRkZGRkZGIiBkPSJtMTYuMSwxNS43OTkyOGMtMS40LDAgLTIuNCwwLjQgLTIuNCwwLjRsLTAuMywxLjdjMCwwIDAuOSwtMC40IDIuMiwtMC40YzAuNywwIDEuMywwLjEgMS4zLDAuN2MwLDAuNCAtMC4xLDAuNSAtMC4xLDAuNXMtMC42LDAgLTAuOSwwYy0xLjcsMCAtMy42LDAuNyAtMy42LDNjMCwxLjggMS4yLDIuMiAxLjksMi4yYzEuNCwwIDIsLTAuOSAyLjEsLTAuOWwtMC4xLDAuOGwxLjgsMGwwLjgsLTUuNWMwLC0yLjQgLTIsLTIuNSAtMi43LC0yLjV6bTAuNCw0LjVjMCwwLjMgLTAuMiwxLjkgLTEuNCwxLjljLTAuNiwwIC0wLjgsLTAuNSAtMC44LC0wLjhjMCwtMC41IDAuMywtMS4yIDEuOCwtMS4yYzAuMywwLjEgMC40LDAuMSAwLjQsMC4xeiIvPiAgPHBhdGggaWQ9InN2Z18zNSIgZmlsbD0iI0ZGRkZGRiIgZD0ibTIwLjcsMjMuODk5MjhjMC41LDAgMywwLjEgMywtMi42YzAsLTIuNSAtMi40LC0yIC0yLjQsLTNjMCwtMC41IDAuNCwtMC43IDEuMSwtMC43YzAuMywwIDEuNCwwLjEgMS40LDAuMWwwLjMsLTEuOGMwLDAgLTAuNywtMC4yIC0xLjksLTAuMmMtMS41LDAgLTMsMC42IC0zLDIuNmMwLDIuMyAyLjUsMi4xIDIuNSwzYzAsMC42IC0wLjcsMC43IC0xLjIsMC43Yy0wLjksMCAtMS44LC0wLjMgLTEuOCwtMC4zbC0wLjMsMS44YzAuMSwwLjIgMC42LDAuNCAyLjMsMC40eiIvPiAgPHBhdGggaWQ9InN2Z18zOCIgZmlsbD0iI0ZGRkZGRiIgZD0ibTYwLjYsMTQuMTk5MjhsLTAuNCwyLjdjMCwwIC0wLjgsLTEgLTEuOSwtMWMtMS44LDAgLTMuNCwyLjIgLTMuNCw0LjhjMCwxLjYgMC44LDMuMyAyLjUsMy4zYzEuMiwwIDEuOSwtMC44IDEuOSwtMC44bC0wLjEsMC43bDIsMGwxLjUsLTkuNmwtMi4xLC0wLjF6bS0wLjksNS4zYzAsMS4xIC0wLjUsMi41IC0xLjYsMi41Yy0wLjcsMCAtMS4xLC0wLjYgLTEuMSwtMS42YzAsLTEuNiAwLjcsLTIuNiAxLjYsLTIuNmMwLjcsMCAxLjEsMC41IDEuMSwxLjd6Ii8+ICA8cGF0aCBpZD0ic3ZnXzQxIiBmaWxsPSIjRkZGRkZGIiBkPSJtNS4yLDIzLjc5OTI4bDEuMiwtNy4ybDAuMiw3LjJsMS40LDBsMi42LC03LjJsLTEuMSw3LjJsMi4xLDBsMS42LC05LjZsLTMuMywwbC0yLDUuOWwtMC4xLC01LjlsLTIuOSwwbC0xLjYsOS42bDEuOSwweiIvPiAgPHBhdGggaWQ9InN2Z180NCIgZmlsbD0iI0ZGRkZGRiIgZD0ibTM2LjIsMjMuNzk5MjhjMC42LC0zLjMgMC43LC02IDIuMSwtNS41YzAuMiwtMS4zIDAuNSwtMS44IDAuNywtMi4zYzAsMCAtMC4xLDAgLTAuNCwwYy0wLjksMCAtMS42LDEuMiAtMS42LDEuMmwwLjIsLTEuMWwtMS45LDBsLTEuMyw3LjhsMi4yLDBsMCwtMC4xeiIvPiAgPHBhdGggaWQ9InN2Z180NyIgZmlsbD0iI0ZGRkZGRiIgZD0ibTQ4LjYsMTUuNzk5MjhjLTEuNCwwIC0yLjQsMC40IC0yLjQsMC40bC0wLjMsMS43YzAsMCAwLjksLTAuNCAyLjIsLTAuNGMwLjcsMCAxLjMsMC4xIDEuMywwLjdjMCwwLjQgLTAuMSwwLjUgLTAuMSwwLjVzLTAuNiwwIC0wLjksMGMtMS43LDAgLTMuNiwwLjcgLTMuNiwzYzAsMS44IDEuMiwyLjIgMS45LDIuMmMxLjQsMCAyLC0wLjkgMi4xLC0wLjlsLTAuMSwwLjhsMS44LDBsMC44LC01LjVjMC4xLC0yLjQgLTIsLTIuNSAtMi43LC0yLjV6bTAuNSw0LjVjMCwwLjMgLTAuMiwxLjkgLTEuNCwxLjljLTAuNiwwIC0wLjgsLTAuNSAtMC44LC0wLjhjMCwtMC41IDAuMywtMS4yIDEuOCwtMS4yYzAuMywwLjEgMC4zLDAuMSAwLjQsMC4xeiIvPiAgPHBhdGggaWQ9InN2Z181MCIgZmlsbD0iI0ZGRkZGRiIgZD0ibTUzLDIzLjc5OTI4YzAuNiwtMy4zIDAuNywtNiAyLjEsLTUuNWMwLjIsLTEuMyAwLjUsLTEuOCAwLjcsLTIuM2MwLDAgLTAuMSwwIC0wLjQsMGMtMC45LDAgLTEuNiwxLjIgLTEuNiwxLjJsMC4yLC0xLjFsLTEuOSwwbC0xLjMsNy44bDIuMiwwbDAsLTAuMXoiLz4gIDxwYXRoIGlkPSJzdmdfNTQiIGZpbGw9IiNEQ0U1RTUiIGQ9Im0yNCwyMi4yOTkyOGMwLDEuMiAwLjcsMS43IDEuNiwxLjdjMC43LDAgMS4zLC0wLjIgMS41LC0wLjNsMC4zLC0xLjdjLTAuMSwwIC0wLjMsMC4xIC0wLjUsMC4xYy0wLjcsMCAtMC44LC0wLjQgLTAuNywtMC42bDAuNiwtMy41bDEuMSwwbDAuMywtMS45bC0xLDBsMC4yLC0xLjIiLz4gIDxwYXRoIGlkPSJzdmdfNTciIGZpbGw9IiNEQ0U1RTUiIGQ9Im0yOC44LDIwLjQ5OTI4YzAsMi44IDAuOSwzLjUgMi41LDMuNWMxLjUsMCAyLjEsLTAuMyAyLjEsLTAuM2wwLjQsLTEuOWMwLDAgLTEuMSwwLjUgLTIuMSwwLjVjLTIuMiwwIC0xLjgsLTEuNiAtMS44LC0xLjZsNC4xLDBjMCwwIDAuMywtMS4zIDAuMywtMS44YzAsLTEuMyAtMC43LC0yLjkgLTIuOSwtMi45Yy0yLjEsLTAuMiAtMi42LDIgLTIuNiw0LjV6bTIuNSwtMi45YzEuMSwwIDEuMywxLjMgMS4zLDEuNGwtMi42LDBjMCwtMC4xIDAuMiwtMS40IDEuMywtMS40eiIvPiAgPHBhdGggaWQ9InN2Z182MCIgZmlsbD0iI0RDRTVFNSIgZD0ibTQ0LDIzLjY5OTI4bDAuNCwtMi4yYzAsMCAtMSwwLjUgLTEuNywwLjVjLTEuNCwwIC0yLC0xLjEgLTIsLTIuM2MwLC0yLjQgMS4yLC0zLjcgMi42LC0zLjdjMSwwIDEuOCwwLjYgMS44LDAuNmwwLjMsLTIuMWMwLDAgLTEuMiwtMC41IC0yLjMsLTAuNWMtMi4zLDAgLTMuNiwyIC0zLjYsNS44YzAsMi41IDAuMiw0LjIgMi42LDQuMmMwLjgsMCAxLjksLTAuMyAxLjksLTAuM3oiLz4gIDxwYXRoIGlkPSJzdmdfNjMiIGZpbGw9IiNEQ0U1RTUiIGQ9Im0xMy40LDE3Ljk5OTI4YzAsMCAwLjksLTAuNCAyLjIsLTAuNGMwLjcsMCAxLjMsMC4xIDEuMywwLjdjMCwwLjQgLTAuMSwwLjUgLTAuMSwwLjVzLTAuNiwwIC0wLjksMGMtMS43LDAgLTMuNiwwLjcgLTMuNiwzYzAsMS44IDEuMiwyLjIgMS45LDIuMmMxLjQsMCAyLC0wLjkgMi4xLC0wLjlsLTAuMSwwLjhsMS44LDBsMC44LC01LjVjMCwtMi4zIC0yLC0yLjQgLTIuOCwtMi40bTEuNSw0LjNjMCwwLjMgLTEuMiwxLjkgLTIuNCwxLjljLTAuNiwwIC0wLjgsLTAuNSAtMC44LC0wLjhjMCwtMC41IDAuMywtMS4yIDEuOCwtMS4yYzAuMywwLjEgMS40LDAuMSAxLjQsMC4xeiIvPiAgPHBhdGggaWQ9InN2Z182NiIgZmlsbD0iI0RDRTVFNSIgZD0ibTE4LjUsMjMuNjk5MjhjMCwwIDAuNiwwLjIgMi4zLDAuMmMwLjUsMCAzLDAuMSAzLC0yLjZjMCwtMi41IC0yLjQsLTIgLTIuNCwtM2MwLC0wLjUgMC40LC0wLjcgMS4xLC0wLjdjMC4zLDAgMS40LDAuMSAxLjQsMC4xbDAuMywtMS44YzAsMCAtMC43LC0wLjIgLTEuOSwtMC4yYy0xLjUsMCAtMiwwLjYgLTIsMi42YzAsMi4zIDEuNSwyLjEgMS41LDNjMCwwLjYgLTAuNywwLjcgLTEuMiwwLjciLz4gIDxwYXRoIGlkPSJzdmdfNjkiIGZpbGw9IiNEQ0U1RTUiIGQ9Im02MC4yLDE2Ljg5OTI4YzAsMCAtMC44LC0xIC0xLjksLTFjLTEuOCwwIC0yLjQsMi4yIC0yLjQsNC44YzAsMS42IC0wLjIsMy4zIDEuNSwzLjNjMS4yLDAgMS45LC0wLjggMS45LC0wLjhsLTAuMSwwLjdsMiwwbDEuNSwtOS42bS0yLjYsNS4yYzAsMS4xIC0wLjksMi41IC0yLDIuNWMtMC43LDAgLTEuMSwtMC42IC0xLjEsLTEuNmMwLC0xLjYgMC43LC0yLjYgMS42LC0yLjZjMC43LDAgMS41LDAuNSAxLjUsMS43eiIvPiAgPHBhdGggaWQ9InN2Z183MiIgZmlsbD0iI0RDRTVFNSIgZD0ibTUuMiwyMy43OTkyOGwxLjIsLTcuMmwwLjIsNy4ybDEuNCwwbDIuNiwtNy4ybC0xLjEsNy4ybDIuMSwwbDEuNiwtOS42bC0yLjUsMGwtMi44LDUuOWwtMC4xLC01LjlsLTEuMSwwbC0zLjQsOS42bDEuOSwweiIvPiAgPHBhdGggaWQ9InN2Z183NSIgZmlsbD0iI0RDRTVFNSIgZD0ibTM0LjEsMjMuNzk5MjhsMi4xLDBjMC42LC0zLjMgMC43LC02IDIuMSwtNS41YzAuMiwtMS4zIDAuNSwtMS44IDAuNywtMi4zYzAsMCAtMC4xLDAgLTAuNCwwYy0wLjksMCAtMS42LDEuMiAtMS42LDEuMmwwLjIsLTEuMSIvPiAgPHBhdGggaWQ9InN2Z183OCIgZmlsbD0iI0RDRTVFNSIgZD0ibTQ1LjksMTcuOTk5MjhjMCwwIDAuOSwtMC40IDIuMiwtMC40YzAuNywwIDEuMywwLjEgMS4zLDAuN2MwLDAuNCAtMC4xLDAuNSAtMC4xLDAuNXMtMC42LDAgLTAuOSwwYy0xLjcsMCAtMy42LDAuNyAtMy42LDNjMCwxLjggMS4yLDIuMiAxLjksMi4yYzEuNCwwIDIsLTAuOSAyLjEsLTAuOWwtMC4xLDAuOGwxLjgsMGwwLjgsLTUuNWMwLC0yLjMgLTIsLTIuNCAtMi44LC0yLjRtMS41LDQuM2MwLDAuMyAtMS4yLDEuOSAtMi40LDEuOWMtMC42LDAgLTAuOCwtMC41IC0wLjgsLTAuOGMwLC0wLjUgMC4zLC0xLjIgMS44LC0xLjJjMC40LDAuMSAxLjQsMC4xIDEuNCwwLjF6Ii8+ICA8cGF0aCBpZD0ic3ZnXzgxIiBmaWxsPSIjRENFNUU1IiBkPSJtNTAuOSwyMy43OTkyOGwyLjEsMGMwLjYsLTMuMyAwLjcsLTYgMi4xLC01LjVjMC4yLC0xLjMgMC41LC0xLjggMC43LC0yLjNjMCwwIC0wLjEsMCAtMC40LDBjLTAuOSwwIC0xLjYsMS4yIC0xLjYsMS4ybDAuMiwtMS4xIi8+IDwvZz48L3N2Zz4="
                          alt="master card"
                        />
                      </label>
                    </span>
                    <span class="radioContainer">
                      <input
                        type="radio"
                        id="visa"
                        name="radio-group"
                        value="visa"
                      />
                      <label for="visa">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxnPiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjIxIiB3aWR0aD0iNjYiIHk9Ii0xIiB4PSItMSIvPiA8L2c+IDxnPiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPiAgPHBvbHlnb24gaWQ9InN2Z181IiBwb2ludHM9IjIzLjI5NDI3MTU0MzYyMjAxNywxOC42ODE3ODkzOTgxOTMzNiAyNi40OTQyNzAzOTkyMTI4MzcsMC42ODE4MDI4MDkyMzg0MzM4IDMxLjQ5NDI3MDM5OTIxMjgzNywwLjY4MTgwMjgwOTIzODQzMzggMjguMzk0MjcxOTI1MDkxNzQzLDE4LjY4MTc4OTM5ODE5MzM2ICIgZmlsbD0iIzNDNThCRiIvPiAgPHBvbHlnb24gaWQ9InN2Z184IiBwb2ludHM9IjIzLjI5NDI3MTU0MzYyMjAxNywxOC42ODE3ODkzOTgxOTMzNiAyNy4zOTQyNzE5MjUwOTE3NDMsMC42ODE4MDI4MDkyMzg0MzM4IDMxLjQ5NDI3MDM5OTIxMjgzNywwLjY4MTgwMjgwOTIzODQzMzggMjguMzk0MjcxOTI1MDkxNzQzLDE4LjY4MTc4OTM5ODE5MzM2ICIgZmlsbD0iIzI5MzY4OCIvPiAgPHBhdGggaWQ9InN2Z18xMSIgZmlsbD0iIzNDNThCRiIgZD0ibTQ2LjQ5NDI3MSwwLjg4MTgwNWMtMSwtMC40IC0yLjYsLTAuOCAtNC42LC0wLjhjLTUsMCAtOC42LDIuNSAtOC42LDYuMWMwLDIuNyAyLjUsNC4xIDQuNSw1YzIsMC45IDIuNiwxLjUgMi42LDIuM2MwLDEuMiAtMS42LDEuOCAtMywxLjhjLTIsMCAtMy4xLC0wLjMgLTQuOCwtMWwtMC43LC0wLjNsLTAuNyw0LjFjMS4yLDAuNSAzLjQsMSA1LjcsMWM1LjMsMCA4LjgsLTIuNSA4LjgsLTYuM2MwLC0yLjEgLTEuMywtMy43IC00LjMsLTVjLTEuOCwtMC45IC0yLjksLTEuNCAtMi45LC0yLjNjMCwtMC44IDAuOSwtMS42IDIuOSwtMS42YzEuNywwIDIuOSwwLjMgMy44LDAuN2wwLjUsMC4ybDAuOCwtMy45bDAsMHoiLz4gIDxwYXRoIGlkPSJzdmdfMTQiIGZpbGw9IiMyOTM2ODgiIGQ9Im00Ni40OTQyNzEsMC44ODE4MDVjLTEsLTAuNCAtMi42LC0wLjggLTQuNiwtMC44Yy01LDAgLTcuNywyLjUgLTcuNyw2LjFjMCwyLjcgMS42LDQuMSAzLjYsNWMyLDAuOSAyLjYsMS41IDIuNiwyLjNjMCwxLjIgLTEuNiwxLjggLTMsMS44Yy0yLDAgLTMuMSwtMC4zIC00LjgsLTFsLTAuNywtMC4zbC0wLjcsNC4xYzEuMiwwLjUgMy40LDEgNS43LDFjNS4zLDAgOC44LC0yLjUgOC44LC02LjNjMCwtMi4xIC0xLjMsLTMuNyAtNC4zLC01Yy0xLjgsLTAuOSAtMi45LC0xLjQgLTIuOSwtMi4zYzAsLTAuOCAwLjksLTEuNiAyLjksLTEuNmMxLjcsMCAyLjksMC4zIDMuOCwwLjdsMC41LDAuMmwwLjgsLTMuOWwwLDB6Ii8+ICA8cGF0aCBpZD0ic3ZnXzE3IiBmaWxsPSIjM0M1OEJGIiBkPSJtNTUuMDk0MjcxLDAuNjgxODA1Yy0xLjIsMCAtMi4xLDAuMSAtMi42LDEuM2wtNy41LDE2LjdsNS40LDBsMSwtM2w2LjQsMGwwLjYsM2w0LjgsMGwtNC4yLC0xOGwtMy45LDB6bS0yLjMsMTJjMC4zLC0wLjkgMiwtNS4zIDIsLTUuM2MwLDAgMC40LC0xLjEgMC43LC0xLjhsMC4zLDEuN2MwLDAgMSw0LjUgMS4yLDUuNWwtNC4yLDBsMCwtMC4xeiIvPiAgPHBhdGggaWQ9InN2Z18yMCIgZmlsbD0iIzI5MzY4OCIgZD0ibTU2LjI5NDI3MSwwLjY4MTgwNWMtMS4yLDAgLTIuMSwwLjEgLTIuNiwxLjNsLTguNywxNi43bDUuNCwwbDEsLTNsNi40LDBsMC42LDNsNC44LDBsLTQuMiwtMThsLTIuNywwem0tMy41LDEyYzAuNCwtMSAyLC01LjMgMiwtNS4zYzAsMCAwLjQsLTEuMSAwLjcsLTEuOGwwLjMsMS43YzAsMCAxLDQuNSAxLjIsNS41bC00LjIsMGwwLC0wLjF6Ii8+ICA8cGF0aCBpZD0ic3ZnXzIzIiBmaWxsPSIjM0M1OEJGIiBkPSJtMTQuMDk0MjcxLDEzLjI4MTgwNWwtMC41LC0yLjZjLTAuOSwtMyAtMy44LC02LjMgLTcsLTcuOWw0LjUsMTZsNS40LDBsOC4xLC0xOGwtNS40LDBsLTUuMSwxMi41eiIvPiAgPHBhdGggaWQ9InN2Z18yNiIgZmlsbD0iIzI5MzY4OCIgZD0ibTE0LjA5NDI3MSwxMy4yODE4MDVsLTAuNSwtMi42Yy0wLjksLTMgLTMuOCwtNi4zIC03LC03LjlsNC41LDE2bDUuNCwwbDguMSwtMThsLTQuNCwwbC02LjEsMTIuNXoiLz4gIDxwYXRoIGlkPSJzdmdfMjkiIGZpbGw9IiNGRkJDMDAiIGQ9Im0wLjE5NDI3MSwwLjY4MTgwNWwwLjksMC4yYzYuNCwxLjUgMTAuOCw1LjMgMTIuNSw5LjhsLTEuOCwtOC41Yy0wLjMsLTEuMiAtMS4yLC0xLjUgLTIuMywtMS41bC05LjMsMHoiLz4gIDxwYXRoIGlkPSJzdmdfMzIiIGZpbGw9IiNGNzk4MUQiIGQ9Im0wLjE5NDI3MSwwLjY4MTgwNWwwLDBjNi40LDEuNSAxMS43LDUuNCAxMy40LDkuOWwtMS43LC03LjFjLTAuMywtMS4yIC0xLjMsLTEuOSAtMi40LC0xLjlsLTkuMywtMC45eiIvPiAgPHBhdGggaWQ9InN2Z18zNSIgZmlsbD0iI0VEN0MwMCIgZD0ibTAuMTk0MjcxLDAuNjgxODA1bDAsMGM2LjQsMS41IDExLjcsNS40IDEzLjQsOS45bC0xLjIsLTMuOWMtMC4zLC0xLjIgLTAuNywtMi40IC0yLjEsLTIuOWwtMTAuMSwtMy4xeiIvPiAgPHBhdGggaWQ9InN2Z18zNyIgZmlsbD0iIzA1MTI0NCIgZD0ibTE5LjA5NDI3MSwxMi42ODE4MDVsLTMuNCwtMy40bC0xLjYsMy44bC0wLjQsLTIuNWMtMC45LC0zIC0zLjgsLTYuMyAtNywtNy45bDQuNSwxNmw1LjQsMGwyLjUsLTZ6Ii8+ICA8cG9seWdvbiBpZD0ic3ZnXzM5IiBwb2ludHM9IjI4LjM5NDI3MTkyNTA5MTc0MywxOC42ODE3ODkzOTgxOTMzNiAyNC4wOTQyNzA3ODA2ODI1NjQsMTQuMjgxNzg5Nzc5NjYzMDg2IDIzLjI5NDI3MTU0MzYyMjAxNywxOC42ODE3ODkzOTgxOTMzNiAyOC4zOTQyNzE5MjUwOTE3NDMsMTguNjgxNzg5Mzk4MTkzMzYgIiBmaWxsPSIjMDUxMjQ0Ii8+ICA8cGF0aCBpZD0ic3ZnXzQxIiBmaWxsPSIjMDUxMjQ0IiBkPSJtMzkuODk0MjcxLDEyLjQ4MTgwNWwwLDBjMC40LDAuNCAwLjYsMC43IDAuNSwxLjFjMCwxLjIgLTEuNiwxLjggLTMsMS44Yy0yLDAgLTMuMSwtMC4zIC00LjgsLTFsLTAuNywtMC4zbC0wLjcsNC4xYzEuMiwwLjUgMy40LDEgNS43LDFjMy4yLDAgNS44LC0wLjkgNy4zLC0yLjVsLTQuMywtNC4yeiIvPiAgPHBhdGggaWQ9InN2Z180MyIgZmlsbD0iIzA1MTI0NCIgZD0ibTQ1LjY5NDI3MSwxOC42ODE4MDVsNC43LDBsMSwtM2w2LjQsMGwwLjYsM2w0LjgsMGwtMS43LC03LjNsLTYsLTUuOGwwLjMsMS42YzAsMCAxLDQuNSAxLjIsNS41bC00LjIsMGMwLjQsLTEgMiwtNS4zIDIsLTUuM2MwLDAgMC40LC0xLjEgMC43LC0xLjgiLz4gPC9nPjwvc3ZnPg=="
                          alt="visa"
                        />
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <!-- NAME -->
              <div class="form-group">
                <div class="row">
                  <div class="col-md-4">
                    <label for="firstName">
                      {{ $t('payment.cardHolder') }}:
                    </label>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      id="firstName"
                      v-validate="'alpha_spaces'"
                    />
                    <span class="error">{{ errors.first("firstName") }}</span>
                  </div>
                </div>
              </div>
              <!-- CARD NUMBER -->
              <div class="form-group">
                <div class="row">
                  <div class="col-md-4">
                    <label for="creditCard">
                      {{ $t('payment.cardNumber') }} :
                    </label>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      :value="cardNumber | formatCardNumber"
                      @input="updateValue"
                      class="form-control"
                      :data-vv-as="$t('payment.cardNumber')"
                      name="creditCard"
                      id="firstName"
                      v-validate="'credit_card'"
                    />
                    <span class="error">{{ errors.first("creditCard") }}</span>
                  </div>
                </div>
              </div>
              <!-- DATES -->
              <div class="form-group">
                <div class="row">
                  <div class="col-md-4">
                    <label for="expiryMonth">
                      {{ $t('payment.cardDate') }} :
                    </label>
                  </div>
                  <div class="col-md-4">
                    <div class="row no-gutters mx-n1">
                      <div class="col-5 px-1">
                        <!-- <input
                          type="text"
                          class="form-control"
                          name="expiryMonth"
                          id="expiryMonth"
                          v-validate="'date_format:MM'"
                          required
                          maxlength="2"
                        /> -->
                        <select
                          class="form-control"
                          name="expiryMonth"
                          id="expiryMonth"
                          required
                        >
                          <option v-for="i in 12" :key="i" :value="i">{{
                            i
                          }}</option>
                        </select>
                      </div>
                      <div class="col-7 px-1">
                        <!-- <input
                          type="text"
                          class="form-control"
                          name="expiryYear"
                          id="expiryYear"
                          v-validate="'digits:4'"
                          required
                          maxlength="4"
                        /> -->
                        <select
                          class="form-control"
                          name="expiryYear"
                          id="expiryYear"
                          required
                        >
                          <option v-for="i in years" :key="i" :value="i">{{
                            i
                          }}</option>
                        </select>
                      </div>
                    </div>
                    <span class="error">{{ errors.first("expiryMonth") }}</span>
                    <span class="error">{{ errors.first("expiryYear") }}</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-4">
                    <label for="cvv">{{ $t('payment.cardCVV') }}:</label>
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex align-items-center">
                      <span class="mr-2">
                        <input
                          type="text"
                          class="form-control mb-0 w-auto"
                          :data-vv-as="$t('payment.cardCVV')"
                          name="cvv"
                          id="cvv"
                          size="3"
                          maxlength="3"
                          v-validate="'digits:3'"
                        />
                      </span>
                      <span class="ccv">
                        <img src="../assets/images/ccv.svg" alt="" />
                      </span>
                    </div>
                    <span class="mt-2 error">{{ errors.first("cvv") }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="text-center mb-1">
                <button class="pay-btn">
                  {{ $t('payment.pay') }}
                </button>
              </p>
              <p class="text-center">
                <img src="../assets/images/cards.svg" alt="cards" width="300" />
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-5 mr-auto mt-2 mt-md-0">
          <div class="preview">
            <div class="row mb-1">
              <div class="col-md-5">
                <div>
                  <svg
                    :viewBox="`0 0 780 ${previewHeight}`"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!-- Common use case: embed HTML text into SVG -->
                    <foreignObject
                      x="0"
                      y="0"
                      width="100%"
                      :height="previewHeight"
                    >
                      <templates
                        :color="color"
                        :onBuilder="true"
                        :selected="selectedCv"
                      />
                    </foreignObject>
                  </svg>
                </div>
              </div>
              <div class="col-md-7">
                <h2>{{ $t('downloadCV') }}</h2>
                <hr />
                <div class="personal-info">
                  <p class="mb-0">Nome : {{ personal.firstName }}</p>
                  <p class="mb-0">Cognome : {{ personal.lastName }}</p>
                  <p class="mb-0">Città : {{ personal.city }}</p>
                  <p class="mb-0">Paese : {{ personal.country }}</p>
                  <p class="mb-0">Email : {{ personal.email }}</p>
                  <div class="text-right">
                    <button @click="showBigPreview" class="view-large-btn">
                      {{ $t('payment.editCV') }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <hr />
                <div class="personal-info mb-2">
                  <p class="mb-0">
                    <span v-if="plan === 'CV Expert'"
                      >{{ $t('payment.period3days') }}</span
                    >
                    <span v-if="plan === 'Achat Solo'">Achat Solo</span>
                  </p>
                  <p v-if="offer === 'free'" class="mb-0">
                    {{ $t('payment.amountToPay') }} :
                    <span v-if="plan === 'CV Expert'">4.90 €!*</span>
                    <span v-if="plan === 'Achat Solo'">29,90 €</span>
                  </p>
                  <p v-if="offer === 'paid'" class="mb-0">
                    {{ $t('payment.period3days') }}
                    <br />
                    {{ $t('payment.amountToPay') }} : 4,90€!*
                  </p>
                </div>
                <small v-if="offer === 'paid'">
                  {{ $t('payment.subscriptionText') }}
                </small>
                <ul v-if="offer === 'paid'" class="mt-3 pl-0 mb-0">
                  <li v-for="i in $t('plan.benefits')" :key="i" class="d-flex items-left mb-1">
                    <span class="mr-2 flex-shrink-0">
                      <svg
                        class="text-success fill-current"
                        style="fill: currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                        /></svg
                    ></span>
                    {{ i }}
                  </li>
                </ul>
                <small v-if="offer === 'free'">
                  {{ $t('payment.subscriptionFree') }}
                </small>
              </div>
            </div>
            <ul v-if="plan === 'CV Expert'" class="mt-3 pl-0">
              <li v-for="i in $t('plan.benefits')" :key="i" class="d-flex items-left mb-1">
                <span class="mr-2 flex-shrink-0">
                  <svg
                    class="text-success fill-current"
                    style="fill: currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    /></svg
                ></span>
                {{ i }}
              </li>
            </ul>
            <ul v-if="plan === 'Achat Solo'" class="mt-3 pl-0">
              <li v-for="(text, i) in $t('plan.benefits')" :key="i" class="d-flex items-left mb-1" :class="{'overline': i >= 2}">
                <span class="mr-2 flex-shrink-0">
                  <svg
                    class="fill"
                    :class="{'success': i < 2}"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    /></svg
                ></span>
                {{ text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bigPreview" class="big-preview">
      <button @click="hideBigPreview" class="close-btn">
        <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
          />
        </svg>
      </button>
      <div class="row no-gutters h-100">
        <div class="col-md-5 col-lg-4 h-100">
          <div class="cv-list">
            <div class="row mx-n2">
              <div
                v-for="(item, i) in templates"
                :key="i"
                class="col-6 col-md-4 px-2 mb-3"
              >
                <div class="img-holder" :class="{ active: selectedCv == i }">
                  <img
                    @click="onClick(i)"
                    class="cv-list-img"
                    :src="
                      require(`@/assets/images/cv-templates/it/${item.thumb}`)
                    "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-8 h-100">
          <div class="overflow-auto h-100">
            <div class="scene-holder">
              <div class="scene">
                <svg
                  :viewBox="`0 0 700 ${previewHeight}`"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <foreignObject
                    x="0"
                    y="0"
                    width="100%"
                    :height="previewHeight"
                  >
                    <templates
                      :color="color"
                      :onBuilder="true"
                      :selected="selectedCv"
                    />
                  </foreignObject>
                </svg>
                <div class="colors in-builder">
                  <button
                    v-for="(item, i) in colors"
                    :key="i"
                    @click="color = item"
                    :class="color === item && 'is-active'"
                    :style="`background-color: ${item}`"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Templates from "../components/Template.vue";
import Footer from "../components/Footer.vue";
import { Validator } from "vee-validate";

const dict = {
  custom: {
    creditCard: {
      credit_card: "Il campo della carta di credito non è valido",
    },
    cvv: {
      digits: "Il campo cvv non è valido",
    },
    firstName: {
      alpha_spaces: "Il campo può contenere solo caratteri alfabetici e spazi",
    },
  },
};

Validator.localize("en", dict);
export default {
  name: "Payment",
  components: {
    Templates,
    Footer,
  },
  data() {
    return {
      bigPreview: false,
      cardNumber: "",
      color: "#91976f",
      colors: {
        orange: "#e78738",
        blue: "#4f51df",
        green: "#9ba76a",
        lightBlue: "#5182c2",
        purple: "#8a75aa",
      },
      years: ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029"],
    };
  },
  computed: {
    selectedCv() {
      return this.$store.state.selectedCv;
    },
    templates() {
      return this.$store.state.templates;
    },
    previewHeight() {
      return this.$store.state.previewHeight;
    },
    offer() {
      return this.$store.state.domain.offer;
    },
    personal() {
      return this.$store.state.personal;
    },
    plan() {
      return this.$store.state.plan;
    },
  },
  filters: {
    formatCardNumber(value) {
      return value ? value.match(/.{1,4}/g).join(" ") : "";
    },
  },
  methods: {
    updateValue(e) {
      this.cardNumber = e.target.value.replace(/ /g, "");

      // Show fake error
      if (this.cardNumber.length == 8) {
        this.$router.push({
          name: "Error",
        });
      }
    },
    onClick(i) {
      let payload = i;
      localStorage.setItem("cv_variant", payload);
      this.$store.dispatch("selectCv", { payload });
    },
    showBigPreview() {
      this.bigPreview = true;
      document.body.style.overflow = "hidden";
    },
    hideBigPreview() {
      this.bigPreview = false;
      document.body.style.overflow = "auto";
    },
  },
  async created() {
    let step = await this.$store.state.step;
    if (step === null && step !== 5) {
      this.$router.push({
        name: "Builder",
      });
    }
  },
};
</script>

<style lang="scss" scoped>

.fill {
  fill:#c8ccd0;
  &.success {
    fill:#28a745
  }
}

.overline {
  text-decoration: line-through;
}

.personal-info {
  font-size: 0.9rem;
}

.radioContainer {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  background: #f2f2f3;
  padding: 6px 10px;
  border-radius: 3px;
  position: relative;
  img {
    margin-left: 4px;
    height: 22px;
    vertical-align: middle;
  }
  input,
  label {
    margin-bottom: 0 !important;
  }
}

.ccv {
  img {
    width: 2.5rem;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(2);
    }
  }
}

.colors {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
  &.in-builder {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 1rem 2rem 1rem 1em;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 4px 15px 10px rgba(22, 22, 23, 0.08);
    transform: translateY(-50%);
    flex-direction: column;
    background-color: #fff;
  }
  button {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    flex-shrink: 0;
    transition: transform 0.25s ease;
    will-change: transform;

    &:hover {
      transform: scale(1.1);
    }

    &.is-active {
      box-shadow: 0px 0px 0px 2px white, 0 0 3px 2px rgba(44, 46, 46, 0.4);
    }
  }
}

.payment {
  padding: 2.5rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  color: #000;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: clamp(1.5rem, 1vw + 1rem, 2.2rem);
    font-weight: bold;
    margin-bottom: 1em;
    letter-spacing: -0.02em;

    .line {
      margin-top: 0.3em;
      display: block;
      width: 15%;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
}

.price {
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: bold;
}

.pay-btn {
  margin: 1.8rem 0;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
  background-color: #279857;
  height: 52px;
  font-size: 1.2rem;
  min-width: 290px;
  padding: 0 8px;
}

.cards {
  width: 360px;
}

.scene-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 100%;
}

.scene {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
  min-width: 50vh;

  svg {
    width: 100%;
  }
}

.big-preview {
  position: fixed;
  inset: 0;
  background-color: #e9ecf0;
  max-height: 100vh;
  z-index: 10000;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: 0;
  z-index: 9999;
  padding: 0.5rem;
  svg {
    width: 18px;
    height: 18px;
  }
}

.cv-list {
  padding: 20px;
  background-color: white;
  height: 100%;
  overflow: scroll;
}

.cv-list::-webkit-scrollbar {
  width: 0.4em;
  border-radius: 10px;
}

.cv-list::-webkit-scrollbar-thumb {
  background-color: #9ca0a5;
  border-radius: 10px;
}

.img-holder {
  position: relative;
  height: 0;
  border: 1px solid #e2e4e6;

  padding-top: 144%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &.active {
    border: 1px solid var(--blue);
    box-shadow: 0px 0px 0 3px #007bff31;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(204, 241, 255, 0.146);
      z-index: 10;
    }
  }

  &:hover:not(.active) {
    box-shadow: 0 2px 3px rgba(44, 46, 46, 0.1);
  }
}

.cv-list-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0.5rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.cv-preview-shadow {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);
}

.view-large-btn {
  margin-top: 0.4rem;
  color: #000;
  font-size: 0.8rem;
  text-decoration: underline;
  border: 0;
  background-color: transparent;
  img {
    position: relative;
    top: -2px;
  }
}

.preview {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #e9ecf0;
  height: 100%;
  padding: 20px;
  .edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 43px;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 9px;
    border: 0;
    background-color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
  }
}

.small-text {
  li {
    font-size: 0.9rem;
    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
