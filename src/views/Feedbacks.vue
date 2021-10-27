<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-4 mb-md-5">Create a CV that Recruiters will Love</h1>
                <div class="price-box">
                <div class="text-left mr-4">
                    <p class="price">1,99 EUR</p>
                    <p class="text">* Then automatically renewed by subscription,<br>for an indefinite period, at 39 € per month.</p>
                </div>
                <router-link to="/browse-templates" class="btn">Get Started Now</router-link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div id="testimonies">
      <div class="container">
        <div class="section-title mb-5">
          <h2>What our clients say</h2>
          <span class="line"></span>
        </div>
        <div class="row pt-5">
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">John Doe</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>I’ve never enjoyed the process of writing my CV but this CV tool made the task so much easier than I ever thought it could be.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Sandra Mills</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>I was able to create my CV in under 30 minutes using this tools and got contacted by 3 companies less than 14 days after submitting applications. Very impressed!</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">James Mahoney</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>I loved the step-by-step process of adding information to my CV. It really helped me figure out the best ways to improve my CV without too much effort</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Dan Owen</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>
                     This tool gave me all the help I needed to make my first CV, that fitted my experience level and gave employers just the incentive to contact me.
                  </p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Laura Thompson</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>With my new, better looking CV I quickly got called in for interviews and found my new job about a month later.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">John Doe</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>I’ve never enjoyed the process of writing my CV but this CV tool made the task so much easier than I ever thought it could be.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Sandra Mills</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>I was able to create my CV in under 30 minutes using this tools and got contacted by 3 companies less than 14 days after submitting applications. Very impressed!</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">James Mahoney</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>I loved the step-by-step process of adding information to my CV. It really helped me figure out the best ways to improve my CV without too much effort</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Dan Owen</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>
                     This tool gave me all the help I needed to make my first CV, that fitted my experience level and gave employers just the incentive to contact me.
                  </p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Laura Thompson</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>With my new, better looking CV I quickly got called in for interviews and found my new job about a month later.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
              <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                  <div class="testimonies__header">
                    <div class="testimonies__header__profile">
                      <div class="d-flex flex-column">
                        <h4 class="text-left">Jeanne Doe</h4>
                        <div class="text-left">
                          <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                              <g>
                                  <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                      c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                      c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                      c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                      l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                      C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                              </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonies__body">
                    <p>I have been actively looking for my first job for about 3 months now and I just came to know about Zety last month. The online CV builder helped me a lot by choosing themes and contents. I was able to land a few interviews after I edited my CV.</p>
                  </div>
              </div>
          </div>
          <div class="col-md-4 mb-3">            
              <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="i * 50">
                  <div class="testimonies__header">
                    <div class="testimonies__header__profile">
                      <div class="d-flex flex-column">
                        <h4 class="text-left">Dennies P.</h4>
                        <div class="text-left">
                          <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                              <g>
                                  <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                      c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                      c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                      c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                      l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                      C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                              </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonies__body">
                    <p>I utilized Zety’s builder app to the fullest, applying everything I learned, and even added some unique touches the CV software offered. Now, instead of stressing over what keyword or language to use on my CV, I can focus on which job offer to accept.</p>
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
// @ is an alias to /src
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,
  },
}
</script>

<style lang="scss" scoped>

#intro-section {
  background-color: var(--secondary-color);
  padding: 5.6rem 0 3.2rem 0;
  @media (max-width: 575.98px) {
    padding-top: 1rem;
  }
  @media (max-width: 1199.98px) {
    overflow: hidden;
  }
}

h1 {
  text-align: left;
  font-size: 2.7rem;
  font-weight: bold;
  color: #fff;
  @media (max-width: 575.98px) {
    font-size: 1.7rem;
  }
}

.benefits {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  &__box {
    display: flex;
    align-items: center;
    margin-bottom: 0.7rem;
    svg {
      position: relative;
      top: -5px;
      margin-right: 1.2rem;
    }
    h4 {
      font-size: 1.2rem;
    }  
  }
}

.price-box {
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  background-color: #1E3C5F;
  padding: 1.2rem 2rem;
  @media (max-width: 991.98px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
  .btn {
    background-color: var(--primary-color);
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px 12px;
    @media (max-width: 991.98px) {
      margin-top: 1rem;
      width: 100%;
    }
  }
  .price {
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: .2rem;
  }
  .text {
    font-weight: bold;
    color: rgba(255,255,255,0.6);
    font-size: 0.7rem;
    margin-bottom: 0;
  }
}

.circles-svg {
  position: absolute;
  top: 30px;
  left: -90px;
} 

.intro-cv-image {
  position: absolute;
  top: -45px;
  left: 0;
  width: 100%;
  @media (max-width: 575.98px) {
    top: 0;
    left: 0;
    position: relative;
    width: 100%;
  }
}
// INTRO SECTION START
#testimonies {
  overflow: hidden;
  padding: 3rem 0;
  background-color: #fff;
}

.testimonies {
  padding: 30px;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    &__profile {
      display: flex;
      align-items: center;
      .img {
        width: 60px;
        height: 60px;
        border-radius: 99999px;
        overflow: hidden;
        margin-right: 0.8rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h4 {
        font-size: 1.3rem;
        margin-bottom: 0;
      }
    }
  }
  &__body {
    text-align: left;
    font-size: 0.9rem;
    p {
      margin-bottom: 0;
    }
  }
}

.box {
  border-radius: 8px;
  border: 1px dashed rgb(154, 225, 154);
  .inner {
    border-radius: 8px;
    padding: 15px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 100%;
    h4, p {
      margin-bottom: 0;
    }
  }
}
</style>