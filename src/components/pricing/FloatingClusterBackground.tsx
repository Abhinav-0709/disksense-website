"use client";

import React from "react";

export const FloatingClusterBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-visible z-0">
      {/* 
        Container locked to the card wrapper width.
        - Mobile: scale-[0.72] xs:scale-[0.82] so icons fit cleanly within screen edges.
        - Desktop: scale-[0.96] lg:scale-100 with snug lateral offsets (-left-22, -right-22).
        - Official Devicon SVGs for: Docker, Kubernetes, Flutter, Node.js, Unity, Unreal Engine, Git.
      */}
      <div className="relative w-full h-full max-w-[285px] xs:max-w-[310px] sm:max-w-[350px] lg:max-w-[365px] scale-[0.72] xs:scale-[0.82] sm:scale-[0.92] md:scale-[0.96] lg:scale-100 transition-transform duration-300">

        {/* ============================================================== */}
        {/* 1. TOP CRESCENT / APEX (Well within top section boundary)      */}
        {/* ============================================================== */}

        {/* 1.1 Official Devicon Docker Whale with Containers (Top Left-Center) */}
        <div
          style={{ filter: "drop-shadow(0 14px 20px rgba(0, 170, 218, 0.4))" }}
          className="absolute -top-14 sm:-top-16 left-[-6px] sm:left-[-10px] -rotate-[10deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative p-2.5 rounded-2xl bg-white dark:bg-[#161B22] border border-sky-300/60 dark:border-sky-500/30 backdrop-blur-xs shadow-xl flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 128 128">
              <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/>
              <path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/>
              <path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"/>
              <path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"/>
              <path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"/>
              <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm3-12h9.8v9.8h-9.8v-9.8zm11.2 12h9.8v9.8h-9.8v-9.8zm11.3 0h9.8v9.8h-9.8v-9.8zm0-11.2h9.8v9.8h-9.8v-9.8zm11.3 11.2H72v9.8h-9.8v-9.8zm0-11.2H72v9.8h-9.8v-9.8zm0-11.3H72V40h-9.8v-9.8zm11.3 22.5h9.8v9.8h-9.8v-9.8z"/>
              <path fillRule="evenodd" clipRule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"/>
              <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"/>
              <path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"/>
            </svg>
          </div>
        </div>

        {/* 1.2 3D .next Build Cache Coin (Top Center) */}
        <div
          style={{ filter: "drop-shadow(0 14px 20px rgba(0, 0, 0, 0.4))" }}
          className="absolute -top-12 sm:-top-14 left-[50%] -translate-x-1/2 rotate-[4deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-[#27272A] to-[#09090B] p-2 border-2 border-white/20 shadow-2xl flex flex-col items-center justify-center">
            <span className="absolute top-1.5 left-5 right-5 h-4 bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none" />
            <svg width="38" height="38" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="maskNext" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#maskNext)">
                <circle cx="90" cy="90" r="90" fill="black" />
                <path
                  d="M149.508 157.086L69.8647 54H54V125.97H66.8647V69.7578L139.697 163.504C143.154 161.615 146.438 159.458 149.508 157.086Z"
                  fill="url(#nextSlash)"
                />
                <rect x="115" y="54" width="12.8647" height="71.97" fill="white" />
              </g>
              <defs>
                <linearGradient id="nextSlash" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-[9.5px] font-mono font-black text-white/90 tracking-wider mt-0.5 drop-shadow-xs">.next</span>
          </div>
        </div>

        {/* 1.3 3D GitHub Repos Octocat Squircle (Top Right-Center) */}
        <div
          style={{ filter: "drop-shadow(0 14px 20px rgba(0, 0, 0, 0.35))" }}
          className="absolute -top-10 sm:-top-12 right-[-2px] sm:right-[-6px] rotate-[12deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-[20px] bg-gradient-to-b from-[#1F242C] via-[#161B22] to-[#0D1117] p-2 border-2 border-white/20 shadow-xl flex flex-col items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="text-[8.5px] font-mono font-bold text-white/80 mt-0.5">git/</span>
          </div>
        </div>


        {/* ============================================================== */}
        {/* 2. LEFT FLANK (V-Wing hugging card left edge)                  */}
        {/* ============================================================== */}

        {/* 2.1 Official Devicon Flutter Bird (Upper Outer Left Wing Tip) */}
        <div
          style={{ filter: "drop-shadow(0 14px 22px rgba(2, 132, 199, 0.35))" }}
          className="absolute top-[-4px] sm:top-[-8px] -left-16 sm:-left-22 md:-left-24 -rotate-[16deg] z-0 transition-transform hover:scale-105"
        >
          <div className="w-15 h-15 sm:w-17 sm:h-17 rounded-[18px] bg-white dark:bg-[#161A22] border border-sky-200/80 dark:border-sky-500/30 shadow-xl flex items-center justify-center p-2.5">
            <svg width="34" height="34" viewBox="0 0 128 128">
              <defs>
                <linearGradient id="flutter-devicon-grad" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399">
                  <stop offset="0" stopColor="#1b4e94"/>
                  <stop offset=".63" stopColor="#1a5497"/>
                  <stop offset="1" stopColor="#195a9b"/>
                </linearGradient>
              </defs>
              <g fill="#3FB6D3">
                <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
              </g>
              <path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"/>
              <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/>
              <path fill="url(#flutter-devicon-grad)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"/>
            </svg>
          </div>
        </div>

        {/* 2.2 Official Devicon Kubernetes Helm Wheel (Upper-Left Shoulder) */}
        <div
          style={{ filter: "drop-shadow(0 14px 22px rgba(50, 108, 229, 0.35))" }}
          className="absolute top-14 sm:top-16 -left-18 sm:-left-22 md:-left-24 rotate-[6deg] z-0 transition-transform hover:scale-105"
        >
          <div className="w-15 h-15 sm:w-17 sm:h-17 rounded-[18px] bg-white dark:bg-[#161A22] border border-blue-200/80 dark:border-blue-500/30 shadow-xl flex items-center justify-center p-2.5">
            <svg width="34" height="34" viewBox="0 0 128 128">
              <path fill="#326ce5" d="M63.556 1.911a8.51 8.44 0 0 0-3.26.826L15.794 24a8.51 8.44 0 0 0-4.603 5.725L.214 77.484a8.51 8.44 0 0 0 1.154 6.47 8.51 8.44 0 0 0 .485.673l30.799 38.297a8.51 8.44 0 0 0 6.654 3.175l49.393-.011a8.51 8.44 0 0 0 6.654-3.17l30.79-38.303a8.51 8.44 0 0 0 1.644-7.14l-10.996-47.76a8.51 8.44 0 0 0-4.604-5.727L67.681 2.738a8.51 8.44 0 0 0-4.125-.827Zm.44 16.252c1.47 0 2.664 1.327 2.664 2.961 0 .232.014.544.006.758-.034.943-.24 1.662-.364 2.531-.224 1.858-.417 3.4-.3 4.832.105.717.522 1 .869 1.332a63.624 63.624 0 0 0 .062 1.19c8.468.751 16.335 4.625 22.112 10.682l1.011-.723c.343.021 1.1.124 1.618-.176 1.19-.802 2.276-1.915 3.59-3.25.601-.638 1.044-1.245 1.76-1.861.162-.14.409-.328.59-.473 1.278-1.018 3.057-.912 3.974.238.917 1.15.622 2.908-.655 3.928-.18.145-.416.346-.588.473-.758.56-1.456.846-2.212 1.29-1.593.984-2.913 1.8-3.961 2.784-.494.53-.457 1.03-.5 1.508-.148.136-.67.598-.946.848a34.478 34.478 0 0 1 4.99 11.537 34.398 34.398 0 0 1 .56 12.435l1.073.313c.194.274.592.94 1.15 1.156 1.372.431 2.914.59 4.776.785.875.073 1.628.03 2.555.205.222.042.545.13.773.182 1.57.379 2.578 1.822 2.254 3.244-.324 1.422-1.857 2.286-3.437 1.946l-.04-.006c-.016-.004-.033-.012-.05-.016-.221-.048-.497-.098-.69-.148-.91-.245-1.57-.61-2.388-.922-1.763-.632-3.224-1.16-4.647-1.366-.72-.058-1.09.287-1.49.551a39.835 39.835 0 0 0-1.139-.199c-2.552 8.02-7.985 14.966-15.353 19.317.127.306.342.958.443 1.074-.17.449-.421.88-.205 1.572.517 1.34 1.354 2.652 2.363 4.229.488.728.988 1.288 1.428 2.122.105.2.244.507.346.717.685 1.465.183 3.151-1.131 3.785-1.326.639-2.974-.037-3.684-1.51-.1-.208-.244-.485-.33-.683-.377-.864-.507-1.604-.773-2.44-.604-1.772-1.102-3.24-1.827-4.48-.406-.6-.903-.676-1.359-.824-.085-.146-.4-.724-.57-1.024a34.56 34.56 0 0 1-4.57 1.377 34.413 34.413 0 0 1-20.01-1.44l-.604 1.09c-.449.12-.882.244-1.148.561-.97 1.157-1.356 3.016-2.061 4.786-.265.836-.393 1.577-.77 2.441-.086.196-.229.468-.33.676v.008l-.006.006c-.71 1.468-2.352 2.139-3.675 1.502-1.315-.633-1.818-2.32-1.133-3.785.102-.211.236-.517.342-.717.44-.834.94-1.398 1.427-2.127 1.008-1.578 1.895-2.994 2.413-4.334.13-.446-.063-1.057-.237-1.508l.483-1.159c-7.09-4.2-12.688-10.897-15.36-19.181l-1.162.199c-.31-.174-.937-.586-1.531-.539-1.422.206-2.88.733-4.643 1.365-.82.314-1.48.672-2.39.916-.193.052-.47.105-.69.154-.017.004-.034.014-.05.018l-.04.004c-1.58.341-3.112-.523-3.437-1.945-.325-1.422.684-2.865 2.254-3.245l.039-.011.021-.006c.224-.052.51-.125.713-.164.927-.175 1.68-.132 2.555-.205 1.862-.195 3.405-.354 4.775-.785.434-.18.85-.775 1.145-1.155l1.115-.326c-1.25-8.655.864-17.15 5.434-24.027l-.852-.762c-.055-.333-.127-1.101-.537-1.537-1.047-.983-2.366-1.8-3.959-2.783-.756-.445-1.449-.733-2.209-1.293-.16-.12-.376-.3-.55-.444l-.042-.027c-1.278-1.019-1.571-2.778-.654-3.928.516-.647 1.304-.967 2.123-.94a3.168 3.168 0 0 1 1.854.702c.182.143.431.333.593.473.715.614 1.15 1.221 1.752 1.859 1.314 1.334 2.4 2.442 3.592 3.244.626.364 1.107.218 1.582.154.153.113.667.483.961.684a34.262 34.262 0 0 1 17.404-9.943 34.663 34.663 0 0 1 4.815-.74l.062-1.128c.355-.344.753-.837.866-1.377.116-1.43-.073-2.974-.297-4.832-.124-.869-.329-1.588-.364-2.53-.007-.194.004-.462.006-.684 0-.025-.006-.05-.006-.075 0-1.634 1.193-2.959 2.663-2.959zm-3.334 20.66a28.076 28.076 0 0 0-2.84.489 27.438 27.438 0 0 0-13.215 7.201l11.457 8.121.021-.011a2.334 2.334 0 0 0 1.383.449 2.348 2.348 0 0 0 2.346-2.248l.057-.028zm6.675 0 .791 13.95.012.006a2.35 2.35 0 0 0 3.733 1.793l.04.017 11.383-8.07a27.668 27.668 0 0 0-15.959-7.695ZM40.452 51.73a27.432 27.432 0 0 0-3.892 17.365l13.408-3.87.012-.046a2.348 2.348 0 0 0 1.217-.803 2.345 2.345 0 0 0-.295-3.232l.01-.057zm47.014.008-10.402 9.308.006.03a2.329 2.329 0 0 0-.746 1.246 2.35 2.35 0 0 0 1.668 2.789l.011.056L91.48 69.05a27.703 27.703 0 0 0-.58-8.931 27.774 27.774 0 0 0-3.434-8.381ZM61.853 61.81l-2.67 3.324.957 4.153 3.857 1.857 3.848-1.85.957-4.154-2.664-3.33zm13.736 11.395a2.333 2.333 0 0 0-.898.232 2.351 2.351 0 0 0-1.139 3.045l-.017.023L78.92 89.51a27.466 27.466 0 0 0 11.102-13.95l-13.871-2.344-.021.028a2.276 2.276 0 0 0-.542-.04zm-23.293.056a2.378 2.378 0 0 0-.46.04l-.024-.028-13.75 2.332a27.58 27.58 0 0 0 11.07 13.854l5.326-12.873-.039-.053a2.326 2.326 0 0 0 .131-1.446 2.349 2.349 0 0 0-2.254-1.826zm11.616 5.64a2.351 2.351 0 0 0-1.987 1.241h-.012l-6.761 12.225a27.542 27.542 0 0 0 15.031.773 28.056 28.056 0 0 0 2.71-.756l-6.78-12.248h-.051a2.337 2.337 0 0 0-1.053-1.002 2.32 2.32 0 0 0-1.097-.232z"/>
            </svg>
          </div>
        </div>

        {/* 2.3 3D Volumetric Storage Folder (Mid-Upper Left - Hugs card snuggly) */}
        <div
          style={{ filter: "drop-shadow(0 16px 24px rgba(245, 158, 11, 0.42))" }}
          className="absolute top-36 sm:top-40 -left-18 sm:-left-22 md:-left-24 -rotate-[14deg] z-0 transition-transform hover:scale-105"
        >
          <svg width="98" height="84" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldFolderBack" x1="10" y1="10" x2="100" y2="85" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="50%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>
              <linearGradient id="goldFolderFront" x1="10" y1="30" x2="105" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="35%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
            <path
              d="M10 16C10 10.5 14.5 6 20 6H44C47.5 6 50.5 8 52.5 11L57 18H96C101.5 18 106 22.5 106 28V78C106 83.5 101.5 88 96 88H20C14.5 88 10 83.5 10 78V16Z"
              fill="url(#goldFolderBack)"
            />
            <rect x="22" y="14" width="68" height="34" rx="4" fill="#FFFFFF" opacity="0.95" />
            <line x1="30" y1="22" x2="60" y2="22" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="30" y1="28" x2="50" y2="28" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <path
              d="M8 36C8 31.5 11.5 28 16 28.5L98 36C102 36.5 105 40 104.5 44L100 86C99.5 90.5 96 94 91.5 94H16C11.5 94 8 90.5 8 86V36Z"
              fill="url(#goldFolderFront)"
            />
          </svg>
        </div>

        {/* 2.4 3D Windows .EXE Installer File Card (Mid Left) */}
        <div
          style={{ filter: "drop-shadow(0 16px 24px rgba(37, 99, 235, 0.4))" }}
          className="absolute top-64 sm:top-68 -left-20 sm:-left-24 md:-left-26 rotate-[8deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative w-24 h-26 sm:w-26 sm:h-28 rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] p-2.5 sm:p-3 text-white border-2 border-blue-300/40 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white/20 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 16l-4-4 1.41-1.41L11 15.17l6.59-6.59L19 10l-8 8z" />
                </svg>
              </span>
              <span className="text-[7.5px] font-mono px-1.5 py-0.5 rounded-sm bg-blue-400/30 font-bold">SETUP</span>
            </div>
            <div>
              <span className="text-[19px] sm:text-[22px] font-black tracking-tight block leading-none text-white drop-shadow-md">.exe</span>
              <span className="text-[8px] font-mono text-blue-200 block mt-1">Installer file</span>
            </div>
          </div>
        </div>

        {/* 2.5 3D node_modules Heavy Red Folder Block (Mid-Lower Left) */}
        <div
          style={{ filter: "drop-shadow(0 16px 24px rgba(220, 38, 38, 0.38))" }}
          className="absolute top-[310px] sm:top-[330px] -left-20 sm:-left-24 md:-left-26 -rotate-[10deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative w-26 h-20 sm:w-28 sm:h-22 rounded-2xl bg-gradient-to-br from-[#EF4444] via-[#DC2626] to-[#991B1B] p-2.5 text-white border-2 border-red-300/40 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black font-mono">npm</span>
              <span className="text-[7.5px] font-bold px-1.5 py-0.5 rounded bg-black/30 font-mono text-red-200">2.4 GB</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold block truncate">node_modules</span>
              <span className="text-[7px] font-sans text-red-100 opacity-80">14,280 files</span>
            </div>
          </div>
        </div>

        {/* 2.6 3D .CACHE File Pill with Lightning Spark (Lower-Left Swoop) */}
        <div
          style={{ filter: "drop-shadow(0 16px 24px rgba(168, 85, 247, 0.45))" }}
          className="absolute top-[385px] sm:top-[405px] -left-18 sm:-left-22 md:-left-24 rotate-[10deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#A855F7] via-[#9333EA] to-[#6B21A8] border-2 border-purple-300/40 text-white shadow-xl flex items-center gap-2">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/25 flex items-center justify-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#FDE047">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-[13px] font-black font-mono tracking-wider leading-none">.CACHE</span>
              <span className="text-[7px] font-mono text-purple-200 mt-0.5">Temp files</span>
            </div>
          </div>
        </div>

        {/* 2.7 VS Code Ribbon Squircle (Bottom-Left Wing Tip) */}
        <div
          style={{ filter: "drop-shadow(0 14px 22px rgba(0, 120, 215, 0.4))" }}
          className="absolute top-[445px] sm:top-[465px] -left-12 sm:-left-16 md:-left-18 -rotate-[12deg] z-0 transition-transform hover:scale-105"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-white dark:bg-[#161A22] border border-blue-300/80 dark:border-blue-500/30 shadow-xl flex items-center justify-center p-2.5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M17.5 2.5l4 2v15l-4 2-9.5-8 9.5-11z" fill="#007ACC" />
              <path d="M17.5 2.5l-8 7.5-6-5 2-2 12-0.5z" fill="#1F9CF0" />
              <path d="M17.5 21.5l-8-7.5-6 5 2 2 12 0.5z" fill="#0066B8" />
              <path d="M3.5 5l6 7-6 7V5z" fill="#007ACC" opacity="0.8" />
            </svg>
          </div>
        </div>


        {/* ============================================================== */}
        {/* 3. RIGHT FLANK (V-Wing hugging card right edge)                */}
        {/* ============================================================== */}

        {/* 3.1 Official Devicon Unity 3D Cube (Upper Outer Right Wing Tip) */}
        <div
          style={{ filter: "drop-shadow(0 14px 22px rgba(0, 0, 0, 0.35))" }}
          className="absolute top-[-4px] sm:top-[-8px] -right-16 sm:-right-22 md:-right-24 rotate-[16deg] z-0 transition-transform hover:scale-105"
        >
          <div className="w-15 h-15 sm:w-17 sm:h-17 rounded-[18px] bg-white dark:bg-[#161A22] border border-zinc-300/80 dark:border-zinc-700/50 shadow-xl flex items-center justify-center p-2.5">
            <svg width="34" height="34" viewBox="0 0 128 128">
              <path fill="#222" className="dark:fill-white" d="m63.991 128 51.702-29.855-19.817-11.461-20.26 11.704a1.151 1.151 0 0 1-1.125-.009 1.145 1.145 0 0 1-.568-.975V69.608c0-.819.424-1.56 1.133-1.968L99.13 53.737a1.119 1.119 0 0 1 1.124.009c.352.195.572.564.576.966V78.11l19.83 11.454V29.855L63.99 62.566Zm0 0"/>
              <path fill="#4d4d4d" className="dark:fill-zinc-300" d="m52.397 98.401-20.27-11.718-19.832 11.46L63.991 128V62.566L7.34 29.854V89.56l19.825-11.45V54.714c.009-.401.225-.77.572-.966a1.13 1.13 0 0 1 1.13-.009L52.953 67.64a2.275 2.275 0 0 1 1.133 1.97v27.8a1.156 1.156 0 0 1-.565.98 1.131 1.131 0 0 1-1.124.012"/>
              <path fill="#888" d="M68.959 0v22.9L89.22 34.597c.348.203.555.576.555.984 0 .403-.212.772-.555.975L65.137 50.468a2.302 2.302 0 0 1-2.27 0L38.791 36.556a1.122 1.122 0 0 1-.56-.975 1.127 1.127 0 0 1 .56-.984L59.048 22.9V0L7.339 29.855l56.652 32.711 56.665-32.71Zm0 0"/>
            </svg>
          </div>
        </div>

        {/* 3.2 Official Devicon Node.js Hexagon (Upper-Right Shoulder) */}
        <div
          style={{ filter: "drop-shadow(0 14px 22px rgba(63, 135, 63, 0.35))" }}
          className="absolute top-14 sm:top-16 -right-18 sm:-right-22 md:-right-24 -rotate-[6deg] z-0 transition-transform hover:scale-105"
        >
          <div className="w-15 h-15 sm:w-17 sm:h-17 rounded-[18px] bg-white dark:bg-[#161A22] border border-emerald-200/80 dark:border-emerald-500/30 shadow-xl flex items-center justify-center p-2.5">
            <svg width="34" height="34" viewBox="0 0 128 128">
              <defs>
                <linearGradient id="node-devicon-a" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3F873F"/><stop offset=".33" stopColor="#3F8B3D"/><stop offset=".637" stopColor="#3E9638"/><stop offset=".934" stopColor="#3DA92E"/><stop offset="1" stopColor="#3DAE2B"/>
                </linearGradient>
                <linearGradient id="node-devicon-b" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
                  <stop offset=".138" stopColor="#3F873F"/><stop offset=".402" stopColor="#52A044"/><stop offset=".713" stopColor="#64B749"/><stop offset=".908" stopColor="#6ABF4B"/>
                </linearGradient>
                <linearGradient id="node-devicon-c" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
                  <stop offset=".092" stopColor="#6ABF4B"/><stop offset=".287" stopColor="#64B749"/><stop offset=".598" stopColor="#52A044"/><stop offset=".862" stopColor="#3F873F"/>
                </linearGradient>
              </defs>
              <path fill="url(#node-devicon-a)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/>
              <path fill="url(#node-devicon-b)" d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"/>
              <path fill="url(#node-devicon-c)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"/>
            </svg>
          </div>
        </div>

        {/* 3.3 3D .ZIP Archive File (Mid-Upper Right) */}
        <div
          style={{ filter: "drop-shadow(0 16px 26px rgba(168, 85, 247, 0.42))" }}
          className="absolute top-36 sm:top-40 -right-18 sm:-right-22 md:-right-24 rotate-[14deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative w-24 h-26 sm:w-26 sm:h-28 rounded-2xl bg-gradient-to-br from-[#A855F7] via-[#7E22CE] to-[#581C87] p-2.5 sm:p-3 text-white border-2 border-purple-300/40 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M10 2v20M14 2v20M7 5h10M7 9h10M7 13h10M7 17h10M7 21h10" />
                </svg>
              </span>
              <span className="text-[7.5px] font-mono px-1.5 py-0.5 rounded-sm bg-purple-400/30 font-bold">ZIP</span>
            </div>
            <div>
              <span className="text-[19px] sm:text-[22px] font-black tracking-tight block leading-none text-white drop-shadow-md">.zip</span>
              <span className="text-[8px] font-mono text-purple-200 block mt-1">Archive package</span>
            </div>
          </div>
        </div>

        {/* 3.4 3D WSL2 / Docker Virtual Disk .VHDX (Mid Right) */}
        <div
          style={{ filter: "drop-shadow(0 16px 26px rgba(34, 197, 94, 0.4))" }}
          className="absolute top-64 sm:top-68 -right-20 sm:-right-24 md:-right-26 -rotate-[8deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative w-26 h-24 sm:w-28 sm:h-26 rounded-2xl bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] p-2.5 sm:p-3 text-white border-2 border-emerald-300/40 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                <line x1="10" y1="12" x2="18" y2="12" strokeLinecap="round" />
              </svg>
              <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/25">WSL2</span>
            </div>
            <div>
              <span className="text-[17px] sm:text-[18px] font-black font-mono block leading-none text-white drop-shadow-sm">.vhdx</span>
              <span className="text-[7.5px] font-mono text-emerald-100 mt-1 block">ext4.vhdx (42 GB)</span>
            </div>
          </div>
        </div>

        {/* 3.5 Official Devicon Git Orange Diamond Branch (Mid-Lower Right) */}
        <div
          style={{ filter: "drop-shadow(0 14px 22px rgba(243, 79, 41, 0.4))" }}
          className="absolute top-[310px] sm:top-[330px] -right-20 sm:-right-24 md:-right-26 rotate-[10deg] z-0 transition-transform hover:scale-105"
        >
          <div className="w-15 h-15 sm:w-17 sm:h-17 rounded-[18px] bg-white dark:bg-[#161A22] border border-orange-200/80 dark:border-orange-500/30 shadow-xl flex items-center justify-center p-2.5">
            <svg width="34" height="34" viewBox="0 0 128 128">
              <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/>
            </svg>
          </div>
        </div>

        {/* 3.6 3D Rust Cargo Target Gear Block (Lower-Right Swoop) */}
        <div
          style={{ filter: "drop-shadow(0 16px 24px rgba(222, 165, 132, 0.45))" }}
          className="absolute top-[385px] sm:top-[405px] -right-18 sm:-right-22 md:-right-24 -rotate-[10deg] z-0 transition-transform hover:scale-105"
        >
          <div className="relative px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-br from-[#D97706] via-[#B45309] to-[#78350F] border-2 border-amber-300/40 text-white shadow-xl flex items-center gap-2">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-[12px] font-black font-mono tracking-wider leading-none">target/</span>
              <span className="text-[7px] font-mono text-amber-200 mt-0.5">Cargo build</span>
            </div>
          </div>
        </div>

        {/* 3.7 Official Devicon Unreal Engine Circle U Squircle (Bottom-Right Wing Tip) */}
        <div
          style={{ filter: "drop-shadow(0 14px 22px rgba(14, 17, 24, 0.4))" }}
          className="absolute top-[445px] sm:top-[465px] -right-12 sm:-right-16 md:-right-18 rotate-[12deg] z-0 transition-transform hover:scale-105"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-white dark:bg-[#161A22] border border-zinc-300/80 dark:border-zinc-700/50 shadow-xl flex items-center justify-center p-2.5">
            <svg width="30" height="30" viewBox="0 0 128 128">
              <g fillRule="evenodd" fill="#0E1118" className="dark:fill-white">
                <path d="M100.61 72.875c-1.063 5.121-5.785 18.266-20.852 25.379l-6.05-6.8-10.212 10.261A37.67 37.67 0 0133.7 86.43c1.086.34 2.203.551 3.336.63 1.672.03 3.485-.583 3.485-3.391V55.974a4.57 4.57 0 00-5.735-4.57c-4.726 1.089-8.504 12.882-8.504 12.882a37.509 37.509 0 0112.98-28.738 38.043 38.043 0 0119.148-8.836c-5.16 2.942-8.058 7.739-8.058 11.762 0 6.477 3.898 5.692 5.054 4.739v37.379c.196.468.453.91.762 1.316a5.528 5.528 0 004.516 2.285c3.902 0 8.968-4.457 8.968-4.457V49.478c0-3.078-2.32-6.793-4.644-8.07 0 0 4.3-.762 7.621 1.777a28.338 28.338 0 011.984-2.183c7.747-7.598 15.04-9.762 21.117-10.844 0 0-11.047 8.683-11.047 20.332 0 8.664.223 29.789.223 29.789 4.098 3.957 10.195-1.758 15.703-7.403z"/>
                <path d="M64 2.383C29.973 2.383 2.383 29.973 2.383 64S29.973 125.617 64 125.617 125.617 98.027 125.617 64 98.027 2.383 64 2.383zm0 120.77C31.332 123.153 4.848 96.669 4.848 64 4.852 31.333 31.336 4.849 64.004 4.853c32.668 0 59.148 26.484 59.148 59.152S96.668 123.157 64 123.157z"/>
              </g>
            </svg>
          </div>
        </div>


        {/* ============================================================== */}
        {/* 4. BOTTOM SECTION (Tucked neatly without crossing divider)     */}
        {/* ============================================================== */}

        {/* 4.1 Python __pycache__ Dual Snake Capsule (Bottom Center-Left) */}
        <div
          style={{ filter: "drop-shadow(0 14px 20px rgba(56, 189, 248, 0.4))" }}
          className="absolute -bottom-3 sm:-bottom-4 left-6 sm:left-10 rotate-[3deg] z-0 transition-transform hover:scale-105"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#1E293B] to-[#0F172A] border-2 border-sky-400/40 text-white shadow-xl">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#38BDF8" d="M11.91 2c-5.06 0-4.74 2.19-4.74 2.19l.01 2.27h4.81v.68H5.21S2 6.77 2 11.83c0 5.06 2.8 4.9 2.8 4.9h1.67v-2.35s-.09-2.8 2.76-2.8h4.75s2.67.04 2.67-2.61V4.65S16.97 2 11.91 2zm-2.6 1.48a.93.93 0 110 1.86.93.93 0 010-1.86z" />
              <path fill="#FACC15" d="M12.09 22c5.06 0 4.74-2.19 4.74-2.19l-.01-2.27h-4.81v-.68h6.78s3.21.37 3.21-4.69c0-5.06-2.8-4.9-2.8-4.9h-1.67v2.35s.09 2.8-2.76 2.8h-4.75s-2.67-.04-2.67 2.61v4.32S7.03 22 12.09 22zm2.6-1.48a.93.93 0 110-1.86.93.93 0 010 1.86z" />
            </svg>
            <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-tight text-sky-200">__pycache__</span>
          </div>
        </div>

        {/* 4.2 Leftover Installer Cleaner Tag (Bottom Center-Right) */}
        <div
          style={{ filter: "drop-shadow(0 14px 20px rgba(234, 88, 12, 0.4))" }}
          className="absolute -bottom-3 sm:-bottom-4 right-6 sm:right-10 -rotate-[3deg] z-0 transition-transform hover:scale-105"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] border-2 border-orange-300/40 text-white shadow-xl">
            <span className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center text-[9.5px] font-black">✓</span>
            <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-tight text-white">Setup.msi Clean</span>
          </div>
        </div>

        {/* 4.3 Center Bottom Crash Dump Pill */}
        <div
          style={{ filter: "drop-shadow(0 10px 14px rgba(239, 68, 68, 0.4))" }}
          className="absolute -bottom-7 sm:-bottom-8 left-[50%] -translate-x-1/2 z-0"
        >
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] border border-red-300/40 text-white text-[8px] sm:text-[8.5px] font-mono font-bold shadow-md">
            CrashDumps (.dmp)
          </div>
        </div>

      </div>
    </div>
  );
};
