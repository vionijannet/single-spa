# single-spa
<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vionijannet/single-spa">
    <img src="https://single-spa.js.org/img/single-spa-mark-magenta.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Single SPA</h3>
  <p align="center">
    Using single-spa to generate root project with Angular, React and Vue frameworks
    <br />
    <br />
    <a href="https://github.com/vionijannet/single-spa"><strong>Explore the project»</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Contact</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A dummy project to learn about single-spa, and how to make different framework in 1 project. Heavily depend on [single-spa package](https://single-spa.js.org/).

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started

Simply clone the project. 

1. Serve all framework separately by go inside each framework.<br/>
   * React
     ```sh
     # terminal from single-spa-root
     cd single-spa-react
     npm start
     ```
   * Angular
     ```sh
     # terminal from single-spa-root
     cd single-spa-angular
     npm start
     ```
   * Vue2
     ```sh
     # terminal from single-spa-root
     cd single-spa-vue2
     npm run serve
     ```
   * Vue3
     ```sh
     # terminal from single-spa-root
     cd single-spa-vue3
     npm run serve
     ```
   
2. In root project, change port in `index.ejs` matching with the port served in the section importmap isLocal (line 53-60).<br/>
   <b>Note</b>: Only need to change `@app/react-app`, `single-app-angular`, `@app\single-spa-vue2`, and `@app\single-spa-vue3`.
   ```sh
   # index.ejs
    {
      "imports": {
        "@single-spa/welcome": "....",
        "@app/root-config": "....",
        "react": "....",
        "react-dom": "....",
        "@app/react-app": "//localhost:<change-port-react-here>/app-react-app.js",
        "single-spa-angular": "//localhost:<change-port-angular-here>/main.js",
        "@app/single-spa-vue3": "//localhost:<change-port-vue3-here>/js/app.js",
        "@app/single-spa-vue2": "//localhost:<change-port-vue2-here>/js/app.js"
      }
    }
   ```
   
3. Serve the root project. The project should be start in port 9000.
   ```sh
   # terminal from single-spa-root
   npm start
   ```
   
4. If root project is not served in port 9000, change port of root-config in `index.ejs`.
   ```sh
   # index.ejs
    {
      "imports": {
        "@single-spa/welcome": "....",
        "@app/root-config": "//localhost:<change-port-root-here>/app-root-config.js",
        "react": "....",
        "react-dom": "....",
        "@app/react-app": "....",
        "single-spa-angular": "....",
        "@app/single-spa-vue3": "....",
        "@app/single-spa-vue2": "...."
      }
    }
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* VIO
* NAV

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [YouTube - Single SPA using Angular and React](https://www.youtube.com/watch?v=MLVv516-QWA)
* [YouTube - Single SPA using Vue2 and Vue3](https://www.youtube.com/watch?v=dgs5ySwVoBw&t=14s)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
