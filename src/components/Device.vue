<template>
  <div class="device" id="device">
    <div class="title">
      <div class="left add">
        <h1 class="title">Устройства</h1>
        <a href="#" class="add">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <circle cx="24" cy="22" r="20" fill="#0851BF" />
              <rect
                x="22.4619"
                y="11.2307"
                width="3.07692"
                height="21.5385"
                rx="1.53846"
                fill="white"
              />
              <rect
                x="34.769"
                y="20.4617"
                width="3.07692"
                height="21.5385"
                rx="1.53846"
                transform="rotate(90 34.769 20.4617)"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="48"
                height="48"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0313726 0 0 0 0 0.317647 0 0 0 0 0.74902 0 0 0 0.25 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>
        </a>
      </div>
      <div class="right">
        <router-link to="/DeviceMap">
          <svg
            class="img-svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4502 2C6.9302 2 2.4502 6.48 2.4502 12C2.4502 17.52 6.9302 22 12.4502 22C17.9702 22 22.4502 17.52 22.4502 12C22.4502 6.48 17.9702 2 12.4502 2ZM11.4502 19.93C7.5002 19.44 4.4502 16.08 4.4502 12C4.4502 11.38 4.5302 10.79 4.6602 10.21L9.4502 15V16C9.4502 17.1 10.3502 18 11.4502 18V19.93ZM16.4502 16C17.3502 16 18.0902 16.58 18.3502 17.39C19.6502 15.97 20.4502 14.08 20.4502 12C20.4502 8.65 18.3802 5.78 15.4502 4.59V5C15.4502 6.1 14.5502 7 13.4502 7H11.4502V9C11.4502 9.55 11.0002 10 10.4502 10H8.4502V12H14.4502C15.0002 12 15.4502 12.45 15.4502 13V16H16.4502Z"
              fill="#AAB7D4"
            />
          </svg>
        </router-link>
        <a href="/device.html">
          <svg
            class="img-svg active"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C4 4.44772 4.44772 4 5 4H20C20.5523 4 21 4.44772 21 5V7C21 7.55228 20.5523 8 20 8H5C4.44772 8 4 7.55228 4 7V5ZM4 13C4 13.5523 4.44772 14 5 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10H5C4.44772 10 4 10.4477 4 11V13ZM4 19C4 19.5523 4.44772 20 5 20H20C20.5523 20 21 19.5523 21 19V17C21 16.4477 20.5523 16 20 16H5C4.44772 16 4 16.4477 4 17V19Z"
              fill="#AAB7D4"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="block_table">
      <table>
        <thead>
          <tr>
            <th>
              №
              <svg
                class="img-svg"
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.619622">
                  <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6L8 0H0L4 6Z"
                    fill="#B6BED2"
                  />
                </g>
              </svg>
              <svg
                class="img-svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M4.57088 5.67046C4.69681 5.8075 4.76595 5.98652 4.76595 6.1717V11.6286C4.76595 11.957 5.16225 12.1237 5.39682 11.8928L6.91906 10.1483C7.12277 9.90386 7.23512 9.78286 7.23512 9.5409V6.17294C7.23512 5.98775 7.30549 5.80874 7.43018 5.67168L11.7981 0.932114C12.1253 0.576553 11.8735 0 11.3895 0H0.611553C0.127595 0 -0.125495 0.575318 0.202905 0.932114L4.57088 5.67046Z"
                    fill="#D5DBE8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th>
              Профиль
              <svg
                class="img-svg"
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.619622">
                  <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6L8 0H0L4 6Z"
                    fill="#B6BED2"
                  />
                </g>
              </svg>
              <svg
                class="img-svg active"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M4.57088 5.67046C4.69681 5.8075 4.76595 5.98652 4.76595 6.1717V11.6286C4.76595 11.957 5.16225 12.1237 5.39682 11.8928L6.91906 10.1483C7.12277 9.90386 7.23512 9.78286 7.23512 9.5409V6.17294C7.23512 5.98775 7.30549 5.80874 7.43018 5.67168L11.7981 0.932114C12.1253 0.576553 11.8735 0 11.3895 0H0.611553C0.127595 0 -0.125495 0.575318 0.202905 0.932114L4.57088 5.67046Z"
                    fill="#D5DBE8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th>
              Владелец
              <svg
                class="img-svg"
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.619622">
                  <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6L8 0H0L4 6Z"
                    fill="#B6BED2"
                  />
                </g>
              </svg>
              <svg
                class="img-svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M4.57088 5.67046C4.69681 5.8075 4.76595 5.98652 4.76595 6.1717V11.6286C4.76595 11.957 5.16225 12.1237 5.39682 11.8928L6.91906 10.1483C7.12277 9.90386 7.23512 9.78286 7.23512 9.5409V6.17294C7.23512 5.98775 7.30549 5.80874 7.43018 5.67168L11.7981 0.932114C12.1253 0.576553 11.8735 0 11.3895 0H0.611553C0.127595 0 -0.125495 0.575318 0.202905 0.932114L4.57088 5.67046Z"
                    fill="#D5DBE8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th>
              Статус
              <svg
                class="img-svg"
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.619622">
                  <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6L8 0H0L4 6Z"
                    fill="#B6BED2"
                  />
                </g>
              </svg>
              <svg
                class="img-svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M4.57088 5.67046C4.69681 5.8075 4.76595 5.98652 4.76595 6.1717V11.6286C4.76595 11.957 5.16225 12.1237 5.39682 11.8928L6.91906 10.1483C7.12277 9.90386 7.23512 9.78286 7.23512 9.5409V6.17294C7.23512 5.98775 7.30549 5.80874 7.43018 5.67168L11.7981 0.932114C12.1253 0.576553 11.8735 0 11.3895 0H0.611553C0.127595 0 -0.125495 0.575318 0.202905 0.932114L4.57088 5.67046Z"
                    fill="#D5DBE8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th class="basket">Действия</th>
            <th class="setting">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.95 10C19.95 10.34 19.92 10.66 19.88 10.98L21.99 12.63C22.18 12.78 22.23 13.05 22.11 13.27L20.11 16.73C19.99 16.95 19.73 17.04 19.5 16.95L17.01 15.95C16.49 16.34 15.93 16.68 15.32 16.93L14.94 19.58C14.91 19.82 14.7 20 14.45 20H10.45C10.2 20 9.99004 19.82 9.96003 19.58L9.58003 16.93C8.97003 16.68 8.41003 16.35 7.89003 15.95L5.40003 16.95C5.18003 17.03 4.91003 16.95 4.79003 16.73L2.79003 13.27C2.67003 13.05 2.72003 12.78 2.91003 12.63L5.02003 10.98C4.98003 10.66 4.95003 10.33 4.95003 10C4.95003 9.67 4.98003 9.34 5.02003 9.02L2.91003 7.37C2.72003 7.22 2.66003 6.95 2.79003 6.73L4.79003 3.27C4.91003 3.05 5.17003 2.96 5.40003 3.05L7.89003 4.05C8.41003 3.66 8.97003 3.32 9.58003 3.07L9.96003 0.42C9.99004 0.18 10.2 0 10.45 0H14.45C14.7 0 14.91 0.18 14.94 0.42L15.32 3.07C15.93 3.32 16.49 3.65 17.01 4.05L19.5 3.05C19.72 2.97 19.99 3.05 20.11 3.27L22.11 6.73C22.23 6.95 22.18 7.22 21.99 7.37L19.88 9.02C19.92 9.34 19.95 9.66 19.95 10ZM8.95003 10C8.95003 11.93 10.52 13.5 12.45 13.5C14.38 13.5 15.95 11.93 15.95 10C15.95 8.07 14.38 6.5 12.45 6.5C10.52 6.5 8.95003 8.07 8.95003 10Z"
                  fill="#AAB7D4"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="active">
            <td>10 871</td>
            <td class="profile">
              Температура
              <svg
                class="img-svg-red"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"
                  fill="#AAB7D4"
                />
              </svg>
            </td>
            <td>GoodWAN</td>
            <td>Работает</td>
            <td class="basket">
              <a href>
                <svg
                  class="img-svg-red"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4502 11V17L21.4502 19V20H3.4502V19L5.4502 17V11C5.4502 7.65 7.81019 4.85 10.9502 4.17V3C10.9502 2.17 11.6202 1.5 12.4502 1.5C13.2802 1.5 13.9502 2.17 13.9502 3V4.17C17.0902 4.85 19.4502 7.65 19.4502 11ZM14.4402 21.01C14.4402 22.11 13.5502 23 12.4502 23C11.3502 23 10.4602 22.11 10.4602 21.01H14.4402Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
              <a href>
                <svg
                  class="img-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
            </td>
            <td class="setting">
              <router-link to="/DeviceCard">
                <button>Открыть</button>
              </router-link>
            </td>
          </tr>
          <tr>
            <td>10 871</td>
            <td class="profile">
              Температура
              <svg
                class="img-svg-red"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"
                  fill="#AAB7D4"
                />
              </svg>
            </td>
            <td>GoodWAN</td>
            <td>Работает</td>
            <td class="basket">
              <a href>
                <svg
                  class="img-svg-red"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4502 11V17L21.4502 19V20H3.4502V19L5.4502 17V11C5.4502 7.65 7.81019 4.85 10.9502 4.17V3C10.9502 2.17 11.6202 1.5 12.4502 1.5C13.2802 1.5 13.9502 2.17 13.9502 3V4.17C17.0902 4.85 19.4502 7.65 19.4502 11ZM14.4402 21.01C14.4402 22.11 13.5502 23 12.4502 23C11.3502 23 10.4602 22.11 10.4602 21.01H14.4402Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
              <a href>
                <svg
                  class="img-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
            </td>
            <td class="setting">
              <router-link to="/DeviceCard">
                <button>Открыть</button>
              </router-link>
            </td>
          </tr>
          <tr>
            <td>10 871</td>
            <td class="profile">
              Температура
              <svg
                class="img-svg-red"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"
                  fill="#AAB7D4"
                />
              </svg>
            </td>
            <td>GoodWAN</td>
            <td>Работает</td>
            <td class="basket">
              <a href>
                <svg
                  class="img-svg-red"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4502 11V17L21.4502 19V20H3.4502V19L5.4502 17V11C5.4502 7.65 7.81019 4.85 10.9502 4.17V3C10.9502 2.17 11.6202 1.5 12.4502 1.5C13.2802 1.5 13.9502 2.17 13.9502 3V4.17C17.0902 4.85 19.4502 7.65 19.4502 11ZM14.4402 21.01C14.4402 22.11 13.5502 23 12.4502 23C11.3502 23 10.4602 22.11 10.4602 21.01H14.4402Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
              <a href>
                <svg
                  class="img-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
            </td>
            <td class="setting">
              <router-link to="/DeviceCard">
                <button>Открыть</button>
              </router-link>
            </td>
          </tr>
          <tr>
            <td>10 871</td>
            <td class="profile">
              Температура
              <svg
                class="img-svg-red"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"
                  fill="#AAB7D4"
                />
              </svg>
            </td>
            <td>GoodWAN</td>
            <td>Работает</td>
            <td class="basket">
              <a href>
                <svg
                  class="img-svg-red"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4502 11V17L21.4502 19V20H3.4502V19L5.4502 17V11C5.4502 7.65 7.81019 4.85 10.9502 4.17V3C10.9502 2.17 11.6202 1.5 12.4502 1.5C13.2802 1.5 13.9502 2.17 13.9502 3V4.17C17.0902 4.85 19.4502 7.65 19.4502 11ZM14.4402 21.01C14.4402 22.11 13.5502 23 12.4502 23C11.3502 23 10.4602 22.11 10.4602 21.01H14.4402Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
              <a href>
                <svg
                  class="img-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
            </td>
            <td class="setting">
              <router-link to="/DeviceCard">
                <button>Открыть</button>
              </router-link>
            </td>
          </tr>
          <tr>
            <td>10 871</td>
            <td class="profile">
              Температура
              <svg
                class="img-svg-red"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"
                  fill="#AAB7D4"
                />
              </svg>
            </td>
            <td>GoodWAN</td>
            <td>Работает</td>
            <td class="basket">
              <a href>
                <svg
                  class="img-svg-red"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4502 11V17L21.4502 19V20H3.4502V19L5.4502 17V11C5.4502 7.65 7.81019 4.85 10.9502 4.17V3C10.9502 2.17 11.6202 1.5 12.4502 1.5C13.2802 1.5 13.9502 2.17 13.9502 3V4.17C17.0902 4.85 19.4502 7.65 19.4502 11ZM14.4402 21.01C14.4402 22.11 13.5502 23 12.4502 23C11.3502 23 10.4602 22.11 10.4602 21.01H14.4402Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
              <a href>
                <svg
                  class="img-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z"
                    fill="#AAB7D4"
                  />
                </svg>
              </a>
            </td>
            <td class="setting">
              <router-link to="/DeviceCard">
                <button>Открыть</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="page">
      <li>
        <a href>
          <svg
            class="img-svg-arrow"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.75 7.91289L0.768295 4.5L4.75 1.08711V7.91289Z" stroke="#979797" />
            <path d="M5.5 4.5H17.5" stroke="#979797" stroke-linecap="square" />
          </svg>
        </a>
      </li>
      <li>
        <a href>1</a>
      </li>
      <li class="active">
        <a href>2</a>
      </li>
      <li>
        <a href>3</a>
      </li>
      <li>
        <a href>4</a>
      </li>
      <li>
        <a href>
          <svg
            class="img-svg-arrow"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.25 1.08711L17.2317 4.5L13.25 7.91289L13.25 1.08711Z" stroke="#979797" />
            <path d="M12.5 4.5L0.5 4.5" stroke="#979797" stroke-linecap="square" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Device',
};
</script>

<style>
</style>
