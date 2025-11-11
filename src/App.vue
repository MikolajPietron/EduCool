<script setup>
import Icon from 'mdi-vue/v3' 
import { mdiAccount } from '@mdi/js'

import 'primeicons/primeicons.css'


</script>

<template>
  <div class="SiteContainer">
    <header id="header">
      <div class="header-logo">
        <img src="/header-logo.svg" alt="Logo">
      </div>
      <div id="header-nav">
        <a href="/">Home</a>
        <a href="/about">Pricing</a>
        <a href="/tutoring">Tutoring</a>
        <a href="/service">Service</a>
      </div>
      <div id="header-login">
        <a href="/signin">Sign in</a>
        <button id="login-btn" type="button">Login</button>
      </div>
    </header>

    <div class="middleContainer">
      <div class="leftSideContainer">
        <div class="middleText">
        <p class="inspiringp">Inspiring</p>
        <p class="educationp">Education</p>
        <p class="explorationp">Exploration</p>
      </div>
      <div class="spacer">
        <div class="spacer1"></div>
        <div class="spacer2"></div>
        <div class="spacer3"></div>
        <div class="spacer4"></div>
        <div class="spacer5"></div>
      </div>
      <div class="leftSideLittleText">
        <div class="leftSideLittleTextWrapper">
          <div class="leftSideLittleTextH3Wrapper">
                  <h3>Kursy dla STUDENTÓW wszytkich<br> kierunków medycznych. <br>Sprawdzone informacje w jednym miejscu.<br> Quizy i fiszki po których po prostu nie możesz nie zaliczyć!</h3>

        </div>
        <div class="leftSideButtonContainer">
        <button class="leftSideButton">Getting Started</button>
      </div>
        </div>
        
      <div class="leftSideNumbers">
        <div class="leftSideCustomers">
          <h1>99K+</h1>
          <p> Studentów</p>
        </div>
        <div class="leftSideCourses">
          <h1>1K+</h1>
          <p>Kursów</p>
        </div>
        
      </div>
      </div>
      
      </div>
      
      
      <div class="middleImg"> 
        <img src="/EduCool.svg" alt="Education Image">
        <div class="middleImgBox">
          <div class="middleImgBoxHeader">
            <div class="middleImgBoxIconContainer">
               <svg
                class="middleImgBoxIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="black"
                style="z-index: 10000;"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div class="middleImgBoxText">
              <h2>Kursy dla<br>Studentów</h2>
            </div>
            
          </div>
          <div class="middleImgBoxLittleText">
            <p>Zbiór wszystkich potrzebnych materiałów edukacyjnych<br> dla studentów - W jednym miejscu</p>
          </div>
        </div>
        <div class="middleRightCourses">
          <div class="middleRightCoursesText">
            <p>Mamy ponad 1 kurs online<br> do wypróbowania! </p>
          </div>
          <div class="middleRightCoursesIcons">
            <div class="Icon1Container">
                <i class="pi pi-instagram" style="font-size: 1.3vw; color: black;"></i>
            </div>
            <div class="Icon2Container">
                <i class="pi pi-facebook" style="font-size: 1.3vw; color: black;"></i>
            </div>
            <div class="Icon3Container">
                <i class="pi pi-twitter" style="font-size: 1.3vw; color: black;"></i>

            </div>
            <div class="Icon4Container">
              <i class="pi pi-linkedin" style="font-size: 1.3vw; color: black;"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="middleRight">
        <button class="pielegniarstwo-btn" type="button">Pielęgniarstwo</button>
        <button class="stomatologia-btn" type="button">Stomatologia</button>
        <button class="medycyna-btn" type="button">Medycyna</button>
        <button class="farmacja-btn" type="button">Farmacja</button>
      </div>
      
    </div>
    
  </div>
</template>
