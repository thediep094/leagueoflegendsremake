import React from "react";

type TProp = {
  name:
    | "voteup"
    | "icon-search"
    | "cart"
    | "close"
    | "up"
    | "filter"
    | "cart2"
    | "cart3"
    | "gift-disabled"
    | "gift-enabled"
    | "shiping-disabled"
    | "shiping-enabled"
    | "time-shipping"
    | "two-gift"
    | "arrowdown";
};

const Icons: React.FC<TProp> = ({ name }) => {
  switch (name) {
    case "icon-search":
      return (
        <svg
          className="icon icon-search"
          fill="none"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M10.6306 16.5995C14.3315 16.4724 17.2286 13.3691 17.1014 9.66821C16.9743 5.9673 13.871 3.0702 10.1701 3.19736C6.46919 3.32451 3.57209 6.42776 3.69924 10.1287C3.82639 13.8296 6.92965 16.7267 10.6306 16.5995ZM10.7267 19.3982C15.9733 19.2179 20.0803 14.8186 19.9 9.57206C19.7198 4.3255 15.3205 0.21846 10.0739 0.398716C4.82739 0.578971 0.720345 4.97827 0.900601 10.2248C1.08086 15.4714 5.48015 19.5784 10.7267 19.3982Z"
            fill-rule="evenodd"
            fill="currentColor"
          />
          <path
            clip-rule="evenodd"
            d="M14.9234 14.9819C15.4883 14.3768 16.4592 14.3651 17.0919 14.9557L21.6973 19.2552C22.33 19.8458 22.3849 20.8152 21.82 21.4203C21.2551 22.0255 20.2842 22.0372 19.6515 21.4465L15.0462 17.1471C14.4135 16.5564 14.3585 15.587 14.9234 14.9819Z"
            fill-rule="evenodd"
            fill="currentColor"
          />
        </svg>
      );
    case "arrowdown":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.69 4.69"
          className="icon icon-arrowdown"
        >
          <path className="st0" d="M.35.37l4 3.64 4-3.64"></path>
          <path className="st1" d="M2.75.01l1.6 1.45L5.95.01z"></path>
        </svg>
      );
    case "cart":
      return (
        <svg version="1.1" viewBox="0 0 25 27">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.5 18.6534V8.55094C23.5 7.65719 23.0238 6.83219 22.25 6.38594L13.5 1.33469C12.7262 0.888438 11.7738 0.888438 11 1.33469L2.25 6.38594C1.47625 6.83219 1 7.65844 1 8.55094V18.6547C1 19.5484 1.47625 20.3734 2.25 20.8197L11 25.8709C11.7738 26.3172 12.7262 26.3172 13.5 25.8709L22.25 20.8197C23.0238 20.3722 23.5 19.5472 23.5 18.6534Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.6375 14.6772V10.3472L17.875 3.85968"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.25 13.6022V26.2022"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.165 7.30093L12.25 13.6022L1.33498 7.30093"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          {/* <g fill="none">
            <path d="M0,0h24v24h-24Z"></path><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.31,6.527l2.09,-2.74c0.378,-0.496 0.966,-0.787 1.59,-0.787h8.02c0.624,0 1.212,0.291 1.59,0.787l2.09,2.74c0.266,0.348 0.41,0.775 0.41,1.213v11.26c0,1.105 -0.895,2 -2,2h-12.2c-1.105,0 -2,-0.895 -2,-2v-11.26c-4.44089e-16,-0.438 0.144,-0.864 0.41,-1.213Z"></path><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16,10c0,2.209 -1.791,4 -4,4c-2.209,0 -4,-1.791 -4,-4"></path><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.02,7.07h15.96"></path>
          </g> */}
        </svg>
      );
    case "close":
      return (
        <svg width="25" height="25" viewBox="683 42 25 25">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAC/ElEQVRYR7WYy6tPURTHPxeZKBn4CwyVN+F6i3RT8iZJmJiIkOuR9zshYipKkjddSSTvZCbPgVcXA3ldr4mB6MveOnf/9trnnHt/d09+v9/Za6/1+a291tprnxr+jQ7APOAXcAj47Z635cdMoAtwDnhXA3QGbgE9ndUHwBDgRxtSXALGOf1fgH4C2QssDow+AkYBH6sM0x5oAOoCvQ0CuQkMixhsBHoA36sIcweojdkSyFTgpGHssfPMh1bCKAYvZLYjVFcvEI3NwBrD2Bvnma+tgLkLDDLWK1gneRDJ7AKWGcIPgRFAU0kY6VdMjDfWHQeUPWRB9HsTsNZY9NplVhnPXHd/IKbyLDDZT4Qger4TWG7AKJtGAp9yPNPOxUSYHX7ZMWBWVkcMRPPbgZWGsbfOM6ltsjJRKk+7BGmm3gKR0B5giQHzBBgMfIvMX4zUCS+m7Jwe05kCkfw2YJUBozrTF/icmb/mti62xISIBWtMQSqbngLd3aJs2Q71/M8OK7byPOLXbQVWG0ruATov/NkRip0AZuQEd0X6puR3A0vzFAbzzVI0tbaoR7yOVDaV3o4i6ZuCXwfUA50MIfU0B4EFZbxX1iNe9wugm2HoJ9C1bD/TEpBUdni2+661KNxclQW5Aowp6PJnwFDgfRH5MiCpYmXZ0hb2KdJcFQW5Cow2rKngqaXcYcwLZkBeC1EE5AYw3DCSLVapoqdt6m+cTX9V54FcBsYaEGeAKcFcqoUQjDwT7WdSIKmjPHV2pNrO584zFTAWSCo7TgHTcjJB8bLCkInCxEBuuwtWTE9FZ5UA2gioCseGAlgxo8MyGiNq+a1G9zwwsUhNyMikWoiXQC9fgbMe0bVTBSg2jgKzS0J48Q3A+sQ2DVRz5UFSnih8lCdA9wGLjPlXQG+B6GKlSI+NI8CcFnoiXKZ4UdzExmGBWFuii9GEKkF4NfuBhRGdjQLRmwC9EciOanoitKt4UdxkxwEfI3o5M9fN6Pv8KnsiVLfFXeI6AjpC6v4AkWyRdVRRwh4AAAAASUVORK5CYII="
            width="25"
            height="25"
            x="683"
            y="42"
          />
        </svg>
      );
    case "up":
      return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M9 5L5 1L1 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "filter":
      return (
        <svg viewBox="0 0 20 18" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 11H14C14.552 11 15 11.448 15 12V16C15 16.552 14.552 17 14 17H12C11.448 17 11 16.552 11 16V12C11 11.448 11.448 11 12 11Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 14H15"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 14H1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 7H6C5.448 7 5 6.552 5 6V2C5 1.448 5.448 1 6 1H8C8.552 1 9 1.448 9 2V6C9 6.552 8.552 7 8 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 4H5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 4H19"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "cart2":
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.625 12.6991V6.30088C16.625 5.73483 16.3234 5.21233 15.8333 4.92971L10.2917 1.73058C9.80162 1.44796 9.19837 1.44796 8.70833 1.73058L3.16667 4.92971C2.67662 5.21233 2.375 5.73563 2.375 6.30088V12.6999C2.375 13.266 2.67662 13.7885 3.16667 14.0711L8.70833 17.2702C9.19837 17.5528 9.80162 17.5528 10.2917 17.2702L15.8333 14.0711C16.3234 13.7877 16.625 13.2652 16.625 12.6991Z"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.94542 10.1808V7.43849L13.0625 3.32974"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 9.5V17.48"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4128 5.5092L9.5 9.49999L2.58717 5.5092"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "cart3":
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.49998"
            cy="9.50001"
            r="7.12797"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.68365 9.7685L8.39991 11.4848L8.38882 11.4737L12.2609 7.60159"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "gift-disabled":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="gift-disabled"
        >
          <path
            d="M14 11H19.5C19.8978 11 20.2794 10.842 20.5607 10.5607C20.842 10.2794 21 9.89782 21 9.5V8.5C21 8.10218 20.842 7.72064 20.5607 7.43934C20.2794 7.15804 19.8978 7 19.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V9.5C3 9.89782 3.15804 10.2794 3.43934 10.5607C3.72064 10.842 4.10218 11 4.5 11H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 11V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 3C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 3C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5C16 5.53043 15.7893 6.03914 15.4142 6.41421C15.0391 6.78929 14.5304 7 14 7H12V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 7H11C10.4477 7 10 7.44772 10 8V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V8C14 7.44772 13.5523 7 13 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "gift-enabled":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="gift-enabled"
        >
          <path
            d="M14 11H19.5C19.8978 11 20.2794 10.842 20.5607 10.5607C20.842 10.2794 21 9.89782 21 9.5V8.5C21 8.10218 20.842 7.72064 20.5607 7.43934C20.2794 7.15804 19.8978 7 19.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V9.5C3 9.89782 3.15804 10.2794 3.43934 10.5607C3.72064 10.842 4.10218 11 4.5 11H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 11V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 3C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 3C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5C16 5.53043 15.7893 6.03914 15.4142 6.41421C15.0391 6.78929 14.5304 7 14 7H12V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 7H11C10.4477 7 10 7.44772 10 8V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V8C14 7.44772 13.5523 7 13 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "shiping-disabled":
      return (
        <svg
          className="shiping-disabled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 19.42H8.17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 14H18V10H21.2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.556 5H14C14.552 5 15 5.448 15 6V15H2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.704 18.296C19.323 18.915 19.323 19.918 18.704 20.536C18.085 21.155 17.082 21.155 16.464 20.536C15.845 19.917 15.845 18.914 16.464 18.296C17.083 17.678 18.086 17.678 18.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.704 18.296C8.323 18.915 8.323 19.918 7.704 20.536C7.085 21.155 6.082 21.155 5.464 20.536C4.846 19.917 4.845 18.914 5.464 18.296C6.083 17.678 7.085 17.678 7.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 19.416H3C2.448 19.416 2 18.968 2 18.416V6C2 5.448 2.448 5 3 5H4.238"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.39701 9.318C6.10001 9.318 4.23801 7.456 4.23801 5.159C4.23801 2.909 6.15101 0.998002 8.40001 1C10.696 1.002 12.555 2.863 12.555 5.159C12.555 7.455 10.694 9.318 8.39701 9.318"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M10.245 4.23499L7.934 6.54599L6.548 5.15899"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "shiping-enabled":
      return (
        <svg
          className="shiping-enabled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 19.42H8.17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 14H18V10H21.2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.556 5H14C14.552 5 15 5.448 15 6V15H2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.704 18.296C19.323 18.915 19.323 19.918 18.704 20.536C18.085 21.155 17.082 21.155 16.464 20.536C15.845 19.917 15.845 18.914 16.464 18.296C17.083 17.678 18.086 17.678 18.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.704 18.296C8.323 18.915 8.323 19.918 7.704 20.536C7.085 21.155 6.082 21.155 5.464 20.536C4.846 19.917 4.845 18.914 5.464 18.296C6.083 17.678 7.085 17.678 7.704 18.296Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 19.416H3C2.448 19.416 2 18.968 2 18.416V6C2 5.448 2.448 5 3 5H4.238"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.39701 9.318C6.10001 9.318 4.23801 7.456 4.23801 5.159C4.23801 2.909 6.15101 0.998002 8.40001 1C10.696 1.002 12.555 2.863 12.555 5.159C12.555 7.455 10.694 9.318 8.39701 9.318"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M10.245 4.23499L7.934 6.54599L6.548 5.15899"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "time-shipping":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="time-shipping"
        >
          <path
            d="M7.63 14.866L11.286 12.637V7.98602"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 21V21C6.02944 21.0018 1.99855 16.9738 1.99674 12.0033C1.99493 7.03271 6.0229 3.00181 10.9935 3C15.5783 2.99833 19.4316 6.44355 19.941 11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.333 17.333L17.667 19L16.667 18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 22H16V22C14.8954 22 14 21.1046 14 20V16V16C14 14.8954 14.8954 14 16 14H20V14C21.1046 14 22 14.8954 22 16V20V20C22 21.1046 21.1046 22 20 22V22Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "two-gift":
      return (
        <svg
          width="52"
          height="24"
          viewBox="0 0 52 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="two-gift"
        >
          <path
            d="M42 11H47.5C47.8978 11 48.2794 10.842 48.5607 10.5607C48.842 10.2794 49 9.89782 49 9.5V8.5C49 8.10218 48.842 7.72064 48.5607 7.43934C48.2794 7.15804 47.8978 7 47.5 7H32.5C32.1022 7 31.7206 7.15804 31.4393 7.43934C31.158 7.72064 31 8.10218 31 8.5V9.5C31 9.89782 31.158 10.2794 31.4393 10.5607C31.7206 10.842 32.1022 11 32.5 11H38"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M48 11V19C48 19.5304 47.7893 20.0391 47.4142 20.4142C47.0391 20.7893 46.5304 21 46 21H34C33.4696 21 32.9609 20.7893 32.5858 20.4142C32.2107 20.0391 32 19.5304 32 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M38 3C38.5304 3 39.0391 3.21071 39.4142 3.58579C39.7893 3.96086 40 4.46957 40 5V7H38C37.4696 7 36.9609 6.78929 36.5858 6.41421C36.2107 6.03914 36 5.53043 36 5C36 4.46957 36.2107 3.96086 36.5858 3.58579C36.9609 3.21071 37.4696 3 38 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M42 3C42.5304 3 43.0391 3.21071 43.4142 3.58579C43.7893 3.96086 44 4.46957 44 5C44 5.53043 43.7893 6.03914 43.4142 6.41421C43.0391 6.78929 42.5304 7 42 7H40V5C40 4.46957 40.2107 3.96086 40.5858 3.58579C40.9609 3.21071 41.4696 3 42 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M41 7H39C38.4477 7 38 7.44772 38 8V20C38 20.5523 38.4477 21 39 21H41C41.5523 21 42 20.5523 42 20V8C42 7.44772 41.5523 7 41 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 11H19.5C19.8978 11 20.2794 10.842 20.5607 10.5607C20.842 10.2794 21 9.89782 21 9.5V8.5C21 8.10218 20.842 7.72064 20.5607 7.43934C20.2794 7.15804 19.8978 7 19.5 7H4.5C4.10218 7 3.72064 7.15804 3.43934 7.43934C3.15804 7.72064 3 8.10218 3 8.5V9.5C3 9.89782 3.15804 10.2794 3.43934 10.5607C3.72064 10.842 4.10218 11 4.5 11H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 11V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 3C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 3C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5C16 5.53043 15.7893 6.03914 15.4142 6.41421C15.0391 6.78929 14.5304 7 14 7H12V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 7H11C10.4477 7 10 7.44772 10 8V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V8C14 7.44772 13.5523 7 13 7Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    default: // voteup
      return (
        <svg version="1.1" viewBox="0 0 24 24">
          <g fill="none">
            <path d="M0,0h24v24h-24Z"></path>
            <path
              stroke="#323232"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.944,19h-1.888c-0.583,0 -1.056,-0.473 -1.056,-1.056v-7.388c0,-0.583 0.473,-1.056 1.056,-1.056h1.888c0.583,0 1.056,0.473 1.056,1.056v7.388c0,0.583 -0.473,1.056 -1.056,1.056Z"
            ></path>
            <path
              stroke="#323232"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8,10.572l3.649,-4.751c0.679,-0.885 2.005,-0.907 2.714,-0.046v0c0.265,0.321 0.409,0.725 0.409,1.141v3.271h3.096c0.601,0 1.162,0.3 1.496,0.799l0.329,0.491c0.295,0.441 0.381,0.99 0.234,1.499l-1.359,4.722c-0.222,0.771 -0.927,1.302 -1.729,1.302h-6.289c-0.5,0 -0.978,-0.208 -1.318,-0.574l-1.232,-1.326"
            ></path>
          </g>
        </svg>
      );
  }
};

export default Icons;
