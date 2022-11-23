interface OriginLogoProps {
  height?: number;
  theme?: "light" | "dark";
}

export const OriginLogo = ({
  height = 24,
  theme = "light",
}: OriginLogoProps) => {
  const originColor = theme === "light" ? "#0074F0" : "#ffffff";
  return (
    <svg
      width="105"
      height={height}
      viewBox="0 0 105 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.2482 23.5502L31.6795 15.7089C31.5748 15.7089 31.5093 15.7089 31.4177 15.7089H27.9356V23.5502H23.38V0.575991H31.4177C37.0598 0.575991 40.4372 3.62613 40.4372 8.24715C40.4372 11.402 38.8925 13.6929 36.1042 14.8449L41.3535 23.5371H36.2482V23.5502ZM27.9487 11.6376H32.0199C34.5464 11.6376 35.7245 10.0013 35.7245 8.26024C35.7245 6.45372 34.5071 4.84356 32.0199 4.84356H27.9487V11.6376V11.6376ZM43.4481 23.5502V0.575991H48.0036V23.5371H43.4481V23.5502ZM69.132 21.1546C67.8884 22.5684 65.1655 24.0084 62.1809 24.0084C55.5831 24.0084 50.2683 18.9946 50.2683 12.0696C50.2683 5.14465 55.5831 0.130907 62.1809 0.130907C66.7364 0.170179 70.5458 2.52651 72.6142 6.205L67.9539 7.42243C66.7102 5.72064 64.4456 4.63411 62.1809 4.63411C57.8871 4.63411 55.0333 7.72352 55.0333 12.0827C55.0333 16.6383 58.1882 19.5575 62.4427 19.5575C66.383 19.5575 68.4513 17.3976 69.1713 15.6172V14.6354H62.8092V10.9177H73.0723V23.5502H69.132C69.132 21.652 69.1713 21.1939 69.1713 21.1546H69.132ZM76.2796 23.5502V0.575991H80.8351V23.5371H76.2796V23.5502ZM104.359 0.575991V23.5371H100.065L93.5331 14.6747C91.4648 11.8471 88.9383 8.24715 88.9121 8.24715H88.8728C88.8466 8.24715 88.9121 11.5591 88.9121 16.1147V23.524H84.3565V0.575991H88.6503L95.3134 9.53004C96.8843 11.5984 99.7774 15.6958 99.8036 15.6958H99.8428C99.8821 15.6958 99.8036 11.9518 99.8036 8.09006V0.575991H104.359ZM20.1204 5.917L16.4027 9.63476C16.5467 10.3678 16.6252 11.1795 16.6252 12.0565C16.6252 16.7561 14.4129 19.5706 10.7082 19.5706C9.1635 19.5706 7.86751 19.0732 6.88571 18.1306L19.767 5.24937C19.4266 4.63411 19.0339 4.07121 18.5888 3.54758C18.4055 3.32504 18.2092 3.12868 18.0128 2.91923C17.9866 2.89305 17.9605 2.86687 17.9343 2.84068C17.8688 2.78832 17.8165 2.72287 17.751 2.6705C15.8659 0.91635 13.4703 0 10.7082 0C7.52716 0 4.80429 1.21744 2.85377 3.53449C1.00798 5.72064 0 8.74459 0 12.0565C0 14.2558 0.445084 16.3241 1.28289 18.1045L5.02683 14.3605C4.89592 13.6536 4.83047 12.8813 4.83047 12.0435C4.83047 9.88349 5.27556 8.12933 6.13954 6.83335C7.16062 5.32792 8.74459 4.52939 10.7082 4.52939C12.2398 4.52939 13.5227 5.01374 14.4914 5.917L1.63634 18.7721C1.98979 19.4135 2.3956 20.0157 2.85377 20.5524C2.94541 20.6571 3.03704 20.7619 3.14177 20.8666C3.2465 20.9844 3.36431 21.1022 3.48213 21.22C3.49522 21.2331 3.50831 21.2462 3.5214 21.2593C3.56067 21.2986 3.58685 21.3379 3.62613 21.364C5.4981 23.1444 7.91988 24.0869 10.7082 24.0869C13.9023 24.0869 16.6252 22.8695 18.5888 20.5524C20.4346 18.3663 21.4557 15.3554 21.4557 12.0435C21.4557 9.81803 20.9844 7.71043 20.1204 5.917Z"
        fill={originColor}
      />
    </svg>
  );
};

export const OriginDollarLogo = ({
}: OriginLogoProps) => {
  return (
    <svg width="auto" height='100%' viewBox="0 0 190 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M120.877 0.543859H111.84V23.4987H120.817C127.134 23.4987 131.91 19.2637 131.91 12.0213C131.91 4.77884 127.194 0.543859 120.877 0.543859ZM120.877 3.67406C125.29 3.67406 128.313 6.52807 128.313 12.0213C128.313 17.5145 125.23 20.3685 120.847 20.3685H115.406V3.67406H120.877Z" fill="white"/>
      <path d="M141.767 7.47941C137.143 7.47941 133.667 10.6403 133.667 15.6425C133.667 20.614 137.143 23.8056 141.767 23.8056C146.362 23.8056 149.838 20.614 149.838 15.6425C149.838 10.6403 146.362 7.47941 141.767 7.47941ZM141.767 10.4255C144.427 10.4255 146.422 12.3588 146.422 15.6425C146.422 18.8954 144.427 20.8288 141.767 20.8288C139.077 20.8288 137.113 18.8954 137.113 15.6425C137.113 12.3588 139.077 10.4255 141.767 10.4255Z" fill="white"/>
      <path d="M155.757 0.317413H152.371V23.4987H155.757V0.317413Z" fill="white"/>
      <path d="M162.416 0.317413H159.03V23.4987H162.416V0.317413Z" fill="white"/>
      <path d="M171.861 7.47941C167.992 7.47941 165.695 10.272 165.695 13.034L169.11 13.1567C169.11 11.7451 169.957 10.4869 171.891 10.4869C173.795 10.4869 174.642 11.7451 174.642 13.7705V14.2308L170.954 14.4456C167.78 14.6298 165.272 15.8266 165.272 19.2023C165.272 22.1484 167.357 23.8056 170.44 23.8056C172.163 23.8056 173.554 23.1304 174.642 22.087V23.4987H178.057V13.7091C178.057 9.68896 175.851 7.47941 171.861 7.47941ZM174.672 16.9007V17.4531C174.672 19.8468 173.161 20.9209 171.015 20.9209C169.654 20.9209 168.687 20.4605 168.687 19.1409C168.687 17.7293 169.836 17.2076 171.438 17.1155L174.672 16.9007Z" fill="white"/>
      <path d="M189.175 7.57147C186.696 7.57147 185.336 8.73762 184.762 9.96515V7.7556H181.467V23.4987H184.852V14.9367C184.852 12.635 186.515 10.9165 189.175 10.9165V7.57147Z" fill="white"/>
      <path d="M36.0513 23.4652L31.5074 15.6522C31.4033 15.6522 31.3382 15.6522 31.247 15.6522H27.7838V23.4652H23.253V0.573913H31.247C36.8585 0.573913 40.2175 3.61304 40.2175 8.21739C40.2175 11.3609 38.6812 13.6435 35.908 14.7913L41.1289 23.4522H36.0513V23.4652ZM27.7968 11.5957H31.8459C34.3587 11.5957 35.5305 9.96522 35.5305 8.23043C35.5305 6.43043 34.3197 4.82609 31.8459 4.82609H27.7968V11.5957ZM43.212 23.4652V0.573913H47.7429V23.4522H43.212V23.4652ZM68.7565 21.0783C67.5196 22.487 64.8115 23.9217 61.8431 23.9217C55.2812 23.9217 49.9952 18.9261 49.9952 12.0261C49.9952 5.12609 55.2812 0.130435 61.8431 0.130435C66.3739 0.169565 70.1626 2.51739 72.2197 6.18261L67.5847 7.39565C66.3478 5.7 64.0955 4.61739 61.8431 4.61739C57.5726 4.61739 54.7344 7.69565 54.7344 12.0391C54.7344 16.5783 57.8721 19.487 62.1035 19.487C66.0224 19.487 68.0795 17.3348 68.7955 15.5609V14.5826H62.468V10.8783H72.6754V23.4652H68.7565C68.7565 21.5739 68.7955 21.1174 68.7955 21.0783H68.7565ZM75.8652 23.4652V0.573913H80.396V23.4522H75.8652V23.4652ZM103.792 0.573913V23.4522H99.5218L93.025 14.6217C90.9679 11.8043 88.4551 8.21739 88.4291 8.21739H88.39C88.364 8.21739 88.4291 11.5174 88.4291 16.0565V23.4391H83.8983V0.573913H88.1687L94.7957 9.49565C96.358 11.5565 99.2354 15.6391 99.2614 15.6391H99.3004C99.3395 15.6391 99.2614 11.9087 99.2614 8.06087V0.573913H103.792ZM20.0111 5.89565L16.3136 9.6C16.4568 10.3304 16.5349 11.1391 16.5349 12.013C16.5349 16.6957 14.3346 19.5 10.65 19.5C9.11372 19.5 7.82478 19.0043 6.84831 18.0652L19.6596 5.23043C19.3211 4.61739 18.9305 4.05652 18.4878 3.53478C18.3055 3.31304 18.1103 3.11739 17.915 2.9087C17.8889 2.88261 17.8629 2.85652 17.8368 2.83043C17.7717 2.77826 17.7197 2.71304 17.6546 2.66087C15.7797 0.913043 13.3972 0 10.65 0C7.48627 0 4.77819 1.21304 2.83827 3.52174C1.00251 5.7 0 8.71304 0 12.013C0 14.2043 0.442666 16.2652 1.27592 18.0391L4.99952 14.3087C4.86933 13.6043 4.80423 12.8348 4.80423 12C4.80423 9.84783 5.2469 8.1 6.10619 6.8087C7.12172 5.3087 8.69709 4.51304 10.65 4.51304C12.1733 4.51304 13.4492 4.99565 14.4127 5.89565L1.62745 18.7043C1.97898 19.3435 2.38259 19.9435 2.83827 20.4783C2.92941 20.5826 3.02055 20.687 3.1247 20.7913C3.22886 20.9087 3.34604 21.0261 3.46321 21.1435C3.47623 21.1565 3.48925 21.1696 3.50227 21.1826C3.54133 21.2217 3.56737 21.2609 3.60643 21.287C5.46823 23.0609 7.87686 24 10.65 24C13.8268 24 16.5349 22.787 18.4878 20.4783C20.3236 18.3 21.3391 15.3 21.3391 12C21.3391 9.78261 20.8704 7.68261 20.0111 5.89565Z" fill="#0074F0"/>
    </svg>
  );
};

export const OriginStoryLogo = ({ height = 24 }: OriginLogoProps) => {
  return (
    <svg width='100%' height={height} viewBox="0 0 588 99" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M113.58 73.9278L99.2649 49.3126C98.9368 49.3126 98.7317 49.3126 98.4446 49.3126H87.5336V73.9278H73.2592V1.80813H98.4446C116.124 1.80813 126.706 11.383 126.706 25.8891C126.706 35.7927 121.866 42.9841 113.129 46.6004L129.578 73.8867H113.58V73.9278ZM87.5746 36.5324H100.331C108.248 36.5324 111.94 31.3957 111.94 25.9302C111.94 20.2592 108.125 15.2047 100.331 15.2047H87.5746V36.5324V36.5324ZM136.141 73.9278V1.80813H150.415V73.8867H136.141V73.9278ZM216.619 66.4076C212.722 70.8457 204.19 75.366 194.838 75.366C174.165 75.366 157.511 59.6271 157.511 37.8885C157.511 16.1499 174.165 0.410938 194.838 0.410938C209.113 0.53422 221.049 7.93111 227.53 19.4785L212.927 23.3002C209.031 17.958 201.934 14.5472 194.838 14.5472C181.384 14.5472 172.442 24.2453 172.442 37.9296C172.442 52.2302 182.328 61.3941 195.659 61.3941C208.005 61.3941 214.486 54.6137 216.742 49.0249V45.9429H196.807V34.2722H228.966V73.9278H216.619C216.619 67.9692 216.742 66.5309 216.742 66.4076H216.619ZM239.015 73.9278V1.80813H253.29V73.8867H239.015V73.9278ZM327 1.80813V73.8867H313.546L293.078 46.0662C286.597 37.1899 278.68 25.8891 278.598 25.8891H278.475C278.393 25.8891 278.598 36.2858 278.598 50.5865V73.8456H264.324V1.80813H277.778L298.656 29.9163C303.578 36.4091 312.644 49.2715 312.726 49.2715H312.849C312.972 49.2715 312.726 37.5186 312.726 25.396V1.80813H327ZM63.0455 18.5744L51.3963 30.245C51.8475 32.5463 52.0936 35.0941 52.0936 37.8474C52.0936 52.6001 45.1614 61.4352 33.5532 61.4352C28.713 61.4352 24.6522 59.8737 21.5758 56.9149L61.938 16.4786C60.8715 14.5472 59.641 12.7802 58.2464 11.1364C57.6721 10.4378 57.0568 9.82142 56.4415 9.16392C56.3595 9.08173 56.2775 8.99954 56.1954 8.91736C55.9903 8.75298 55.8263 8.54751 55.6212 8.38314C49.7145 2.87657 42.2081 0 33.5532 0C23.5857 0 15.0538 3.82172 8.94205 11.0953C3.15843 17.958 0 27.4507 0 37.8474C0 44.7512 1.39463 51.244 4.01982 56.8327L15.7511 45.0799C15.3409 42.8608 15.1359 40.4363 15.1359 37.8063C15.1359 31.0258 16.5305 25.5193 19.2377 21.451C22.4372 16.7252 27.4004 14.2185 33.5532 14.2185C38.3524 14.2185 42.3722 15.7389 45.4075 18.5744L5.12732 58.9285C6.23482 60.9421 7.5064 62.8324 8.94205 64.5173C9.22918 64.846 9.51631 65.1748 9.84446 65.5035C10.1726 65.8734 10.5418 66.2432 10.9109 66.6131C10.952 66.6542 10.993 66.6952 11.034 66.7363C11.157 66.8596 11.2391 66.9829 11.3621 67.0651C17.2278 72.6539 24.8162 75.6126 33.5532 75.6126C43.5617 75.6126 52.0936 71.7909 58.2464 64.5173C64.03 57.6546 67.2294 48.203 67.2294 37.8063C67.2294 30.8204 65.7528 24.2043 63.0455 18.5744Z" fill="#0074F0"/>
      <path d="M378.751 1C361.886 1 353.648 10.771 353.648 22.1866C353.648 36.0207 364.309 39.6969 377.297 42.8894C388.347 45.5015 394.647 47.4363 394.647 54.692C394.647 62.2379 388.54 65.3337 380.205 65.3337C371.094 65.3337 364.212 60.3998 363.728 52.6604L352 53.3376C352.485 67.462 364.309 75.2981 380.205 75.2981C394.55 75.2981 406.374 68.8164 406.374 53.9181C406.374 41.1481 396.779 36.7947 381.562 33.1185C371.094 30.6999 365.472 29.0553 365.472 21.7996C365.472 15.6081 370.125 10.9645 378.945 10.9645C387.087 10.9645 392.417 15.4146 392.805 22.6703L404.533 21.9931C404.048 8.73938 393.58 1 378.751 1Z" fill="#02080D"/>
      <path d="M437.809 65.3337C433.35 65.3337 429.57 63.3021 429.57 56.8203L429.667 34.0859H442.364V24.7019H429.764L429.861 7.8687H418.909L418.812 24.7019H409.604V34.0859H418.812L418.715 59.0454C418.618 70.2675 425.403 75.1046 435.192 75.1046C438.681 75.1046 440.62 74.8144 442.461 74.5242V64.85C441.298 65.0434 439.844 65.3337 437.809 65.3337Z" fill="#02080D"/>
      <path d="M473.29 23.8312C458.461 23.8312 447.314 33.7957 447.314 49.5647C447.314 65.2369 458.461 75.2981 473.29 75.2981C488.022 75.2981 499.169 65.2369 499.169 49.5647C499.169 33.7957 488.022 23.8312 473.29 23.8312ZM473.29 33.1185C481.819 33.1185 488.216 39.2132 488.216 49.5647C488.216 59.8193 481.819 65.9141 473.29 65.9141C464.664 65.9141 458.364 59.8193 458.364 49.5647C458.364 39.2132 464.664 33.1185 473.29 33.1185Z" fill="#02080D"/>
      <path d="M531.447 24.1214C523.5 24.1214 519.983 27.7976 518.141 31.6673V24.7019H507.577V74.3307H518.432V47.3396C518.432 40.0839 526.297 34.6663 534.827 34.6663L531.447 24.1214Z" fill="#02080D"/>
      <path d="M587.707 24.7019H575.591L562.216 58.6584L548.84 24.7019H536.725L556.4 70.848L544.188 99H556.11L587.707 24.7019Z" fill="#02080D"/>
    </svg>
  );
};

<svg
  width="198"
  height="25"
  viewBox="0 0 198 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M37.0045 24.0425L32.3354 16.0283C32.2309 16.0283 32.1612 16.0283 32.0567 16.0283H28.5374V24.0425H23.8683V0.592351H32.0915C37.8756 0.592351 41.2904 3.69348 41.2904 8.43229C41.2904 11.6728 39.7224 13.9725 36.8652 15.1572L42.2312 24.0425H37.0045ZM28.5374 11.8819H32.6839C35.2623 11.8819 36.4819 10.2093 36.4819 8.43229C36.4819 6.58555 35.2623 4.94788 32.6839 4.94788H28.5374V11.8819ZM44.3567 24.0425V0.592351H49.0258V24.0425H44.3567ZM70.5943 21.6034C69.3051 23.032 66.5524 24.5303 63.4861 24.5303C56.7612 24.5303 51.3255 19.4082 51.3255 12.3348C51.3255 5.26147 56.7612 0.139377 63.4861 0.139377C68.1552 0.174221 72.023 2.57847 74.1485 6.34164L69.3748 7.56119C68.0856 5.81898 65.7858 4.70397 63.4861 4.70397C59.0958 4.70397 56.1688 7.87479 56.1688 12.3348C56.1688 17.004 59.4094 19.9657 63.7649 19.9657C67.772 19.9657 69.8975 17.7705 70.6292 15.9586V14.9482H64.1133V11.1501H74.6014V24.0425H70.5943C70.5943 22.0912 70.6292 21.6382 70.6292 21.6034H70.5943ZM77.9116 24.0425V0.592351H82.5807V24.0425H77.9116ZM106.588 0.592351V24.0425H102.198L95.5428 14.983C93.4173 12.0909 90.8388 8.43229 90.8388 8.43229H90.804C90.7691 8.43229 90.8388 11.8122 90.8388 16.4813V24.0773H86.1697V0.592351H90.5601L97.3547 9.75637C98.9575 11.8819 101.919 16.0632 101.954 16.0632H101.989C102.024 16.0632 101.954 12.2303 101.954 8.29292V0.592351H106.588ZM20.5232 6.02804L16.7252 9.82606C16.8646 10.5926 16.9691 11.3941 16.9691 12.3C16.9691 17.1085 14.7043 19.9657 10.9411 19.9657C9.37309 19.9657 8.04901 19.4779 7.03853 18.5023L20.2096 5.33116C19.8612 4.70397 19.4431 4.14646 19.0249 3.58895C18.8159 3.34504 18.6416 3.17082 18.4326 2.92691C18.3977 2.89207 18.3629 2.85722 18.328 2.85722C18.2584 2.85722 18.1887 2.78754 18.119 2.71785C16.2026 0.940793 13.7286 0 10.9411 0C7.66572 0 4.87819 1.25439 2.89207 3.6238C1.01048 5.85382 0 8.92011 0 12.3C0 14.53 0.452974 16.6555 1.32408 18.4674L5.15694 14.6346C5.01756 13.9028 4.94788 13.1363 4.94788 12.2652C4.94788 10.07 5.40085 8.25807 6.3068 6.93399C7.35213 5.40085 8.95496 4.56459 10.9759 4.56459C12.5439 4.56459 13.8331 5.05241 14.8436 5.9932L1.63768 19.1643C1.98612 19.8263 2.40425 20.4535 2.89207 20.9762C2.9966 21.0807 3.10113 21.1853 3.17082 21.2898C3.27535 21.4292 3.41473 21.5337 3.51926 21.6382C3.55411 21.6731 3.55411 21.6731 3.55411 21.6731C3.58895 21.7079 3.6238 21.7428 3.65864 21.7776C5.57507 23.5895 8.04901 24.5652 10.9062 24.5652C14.1816 24.5652 16.9343 23.3108 18.9552 20.9414C20.8368 18.7113 21.8822 15.6102 21.8822 12.2652C21.917 10.0351 21.4292 7.87479 20.5232 6.02804Z"
    fill="#0074F0"
  />
</svg>;

export const YouTube = ({ size = "17" }: { size?: string | number }) => (
  <svg
    width="17"
    height="13"
    viewBox="0 0 17 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.597 1.09528C11.2254 0.933405 5.94329 0.934063 3.57498 1.09528C1.01058 1.27032 0.708536 2.81936 0.689453 6.89661C0.708536 10.9666 1.00795 12.5222 3.57498 12.6979C5.94394 12.8592 11.2254 12.8598 13.597 12.6979C16.1614 12.5229 16.4635 10.9739 16.4825 6.89661C16.4635 2.8266 16.164 1.27098 13.597 1.09528ZM6.61186 9.52879V4.26443L11.8762 6.892L6.61186 9.52879Z"
      fill="white"
    />
  </svg>
);

export const Facebook = ({ size = "17" }: { size?: string | number }) => (
  <svg width={size} height={size} viewBox="0 0 9 16">
    <path
      d="M2.7671 5.26436H0.792969V7.89654H2.7671V15.7931H6.05733V7.89654H8.45393L8.68951 5.26436H6.05733V4.1674C6.05733 3.53897 6.18367 3.29023 6.79105 3.29023H8.68951V0H6.18368C3.81734 0 2.7671 1.04169 2.7671 3.03688V5.26436Z"
      fill="white"
    />
  </svg>
);

export const Twitter = ({ size = "17" }: { size?: string | number }) => (
  <svg width={size} height={size} viewBox="0 0 16 14">
    <path
      d="M15.7931 1.99892C15.212 2.25687 14.5875 2.4306 13.9321 2.5089C14.6014 2.10815 15.1153 1.47314 15.3568 0.716389C14.731 1.08753 14.0374 1.35732 13.2991 1.50275C12.7088 0.873003 11.8659 0.479492 10.9341 0.479492C8.84215 0.479492 7.30496 2.43125 7.77744 4.45738C5.08537 4.32248 2.69799 3.03271 1.09959 1.07239C0.250715 2.52864 0.659361 4.43369 2.1018 5.39838C1.57141 5.38127 1.0713 5.23584 0.635014 4.99302C0.599479 6.49403 1.67538 7.89829 3.23363 8.21086C2.77761 8.33458 2.27815 8.36353 1.77014 8.26614C2.18208 9.55328 3.3784 10.4897 4.79715 10.516C3.435 11.584 1.71881 12.0611 0 11.8584C1.43388 12.7777 3.13756 13.314 4.96692 13.314C10.9828 13.314 14.3816 8.23324 14.1763 3.67628C14.8093 3.21893 15.3588 2.64841 15.7931 1.99892Z"
      fill="white"
    />
  </svg>
);

export const Reddit = ({ size = "17" }: { size?: string | number }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="reddit-alien"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"
    />
  </svg>
);

export const Telegram = ({ size = "17" }: { size?: string | number }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="telegram-plane"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 14"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3732 13.3315C12.585 13.4815 12.8581 13.519 13.1016 13.4269C13.3451 13.3341 13.5241 13.1262 13.578 12.8741C14.1499 10.1867 15.537 3.38448 16.0576 0.939842C16.097 0.75559 16.0312 0.564099 15.8865 0.441044C15.7417 0.31799 15.541 0.282455 15.362 0.348918C12.6028 1.3702 4.10548 4.55843 0.632313 5.84359C0.411868 5.92519 0.268414 6.13708 0.275652 6.36937C0.283549 6.60232 0.440164 6.80434 0.665873 6.87212C2.22347 7.33802 4.26801 7.98619 4.26801 7.98619C4.26801 7.98619 5.22349 10.8717 5.72163 12.3392C5.78415 12.5234 5.92826 12.6682 6.11844 12.7182C6.30795 12.7675 6.51063 12.7156 6.65211 12.582C7.45229 11.8265 8.68942 10.6585 8.68942 10.6585C8.68942 10.6585 11.04 12.3819 12.3732 13.3315ZM5.12808 7.62163L6.23294 11.2659L6.47839 8.95812C6.47839 8.95812 10.7471 5.1079 13.1806 2.91332C13.2516 2.84883 13.2615 2.74091 13.2023 2.66524C13.1437 2.58956 13.0358 2.57179 12.9549 2.62312C10.1345 4.42419 5.12808 7.62163 5.12808 7.62163Z"
      fill="white"
    />
  </svg>
);

export const Medium = ({ size = "17" }: { size?: string | number }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="medium-letter"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 14"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.35522 3.18526C2.37496 2.99114 2.3006 2.79965 2.15583 2.66936L0.68181 0.892634V0.627441H5.26049L8.79945 8.38908L11.9107 0.627441H16.2755V0.892634L15.0147 2.10146C14.9061 2.18438 14.8522 2.32059 14.8745 2.45549V11.3378C14.8522 11.472 14.9061 11.6082 15.0147 11.6912L16.2459 12.9V13.1652H10.0524V12.9L11.3283 11.6615C11.4534 11.5365 11.4534 11.4997 11.4534 11.3082V4.1289L7.90715 13.1362H7.42809L3.29886 4.1289V10.1658C3.26464 10.4192 3.34887 10.6751 3.5272 10.8581L5.18613 12.8704V13.1362H0.482422V12.8704L2.14135 10.8581C2.31903 10.6745 2.39799 10.4172 2.35522 10.1658V3.18526Z"
      fill="white"
    />
  </svg>
);

export const Discord = ({ size = "17" }: { size?: string | number }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="Discord-chat"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2695 0C13.1618 0 13.8883 0.726482 13.8883 1.62669V15.7931L12.1905 14.2927L11.235 13.4083L10.2243 12.4686L10.6428 13.9295H1.68813C0.795818 13.9295 0.0693359 13.203 0.0693359 12.3028V1.62669C0.0693359 0.726482 0.795818 0 1.68813 0H12.2695V0ZM9.22143 10.3129C10.9666 10.2576 11.6378 9.11261 11.6378 9.11261C11.6378 6.56992 10.5007 4.50893 10.5007 4.50893C9.36357 3.6561 8.28174 3.67979 8.28174 3.67979L8.17119 3.80613C9.5136 4.21675 10.1374 4.80899 10.1374 4.80899C9.31619 4.35889 8.51074 4.13779 7.76057 4.05093C7.19202 3.98775 6.64716 4.00355 6.16547 4.06672L6.03123 4.08251C5.75485 4.1062 5.08364 4.20886 4.23871 4.57999C3.94654 4.71424 3.77281 4.80899 3.77281 4.80899C3.77281 4.80899 4.42823 4.18517 5.84961 3.77455L5.77064 3.67979C5.77064 3.67979 4.68881 3.6561 3.55171 4.50893C3.55171 4.50893 2.41461 6.56992 2.41461 9.11261C2.41461 9.11261 3.07792 10.2576 4.82305 10.3129C4.82305 10.3129 5.11523 9.95754 5.35212 9.65747C4.34926 9.3574 3.97023 8.72568 3.97023 8.72568L4.19133 8.85992L4.22292 8.88361L4.25385 8.90138L4.26306 8.90532L4.29399 8.92309C4.4914 9.03364 4.68881 9.12051 4.87043 9.19158C5.19419 9.31792 5.58112 9.44426 6.03123 9.53113C6.62347 9.64168 7.31836 9.68116 8.07643 9.53902C8.44757 9.47585 8.8266 9.3653 9.22143 9.19947C9.49781 9.09682 9.80577 8.94678 10.1295 8.73358C10.1295 8.73358 9.7347 9.38109 8.70026 9.67326C8.93715 9.97333 9.22143 10.3129 9.22143 10.3129ZM5.54954 6.6252C5.09943 6.6252 4.74409 7.02003 4.74409 7.50171C4.74409 7.9834 5.10733 8.37823 5.54954 8.37823C5.99964 8.37823 6.35498 7.9834 6.35498 7.50171C6.36288 7.02003 5.99964 6.6252 5.54954 6.6252ZM8.43177 6.6252C7.98167 6.6252 7.62633 7.02003 7.62633 7.50171C7.62633 7.9834 7.98957 8.37823 8.43177 8.37823C8.88188 8.37823 9.23722 7.9834 9.23722 7.50171C9.23722 7.02003 8.88188 6.6252 8.43177 6.6252Z"
      fill="white"
    />
  </svg>
);

export const DownCaret = ({
  width = "8",
  height = "5",
}: {
  width?: string | number;
  height?: string | number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.25 0.75L4 4.25L0.75 0.75"
      stroke="#475569"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RedditIcon = ({ size = "17" }: { size?: string | number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6818 6.75094C16.6818 5.79085 15.8974 5.01041 14.9333 5.01041C14.4628 5.01041 14.0364 5.19861 13.7225 5.50131C12.5315 4.71758 10.9199 4.21878 9.13529 4.15495L10.1112 1.08254L12.7539 1.70176L12.7499 1.73993C12.7499 2.52498 13.3915 3.16328 14.1805 3.16328C14.9689 3.16328 15.6098 2.52498 15.6098 1.73993C15.6098 0.95488 14.9682 0.315918 14.1805 0.315918C13.5751 0.315918 13.0592 0.693636 12.8506 1.22336L10.0019 0.555446C9.87757 0.525176 9.75122 0.596903 9.7124 0.7193L8.62399 4.14574C6.75646 4.16811 5.06463 4.67086 3.82026 5.47828C3.50835 5.19006 3.09444 5.00975 2.63644 5.00975C1.6724 5.00975 0.888672 5.79085 0.888672 6.75094C0.888672 7.38925 1.23941 7.94266 1.75532 8.24536C1.7211 8.43093 1.69873 8.61847 1.69873 8.80931C1.69873 11.3829 4.86261 13.4768 8.75231 13.4768C12.642 13.4768 15.8066 11.3829 15.8066 8.80931C15.8066 8.629 15.7875 8.45133 15.7572 8.27629C16.3047 7.98214 16.6818 7.41294 16.6818 6.75094ZM5.34759 7.94595C5.34759 7.37477 5.8148 6.90953 6.38861 6.90953C6.96243 6.90953 7.42898 7.37477 7.42898 7.94595C7.42898 8.51713 6.96243 8.98171 6.38861 8.98171C5.8148 8.98171 5.34759 8.51713 5.34759 7.94595ZM11.3101 11.0184C10.7857 11.5402 9.96246 11.7942 8.79377 11.7942L8.78521 11.7922L8.77666 11.7942C7.60731 11.7942 6.7841 11.5402 6.26029 11.0184C6.16488 10.9236 6.16488 10.769 6.26029 10.6742C6.35571 10.5788 6.51101 10.5788 6.60643 10.6742C7.03416 11.1 7.74419 11.3066 8.77666 11.3066L8.78521 11.3086L8.79377 11.3066C9.82624 11.3066 10.5363 11.0993 10.964 10.6735C11.0594 10.5781 11.2147 10.5788 11.3101 10.6735C11.4056 10.769 11.4056 10.9229 11.3101 11.0184ZM11.1858 8.98171C10.6119 8.98171 10.1454 8.51713 10.1454 7.94595C10.1454 7.37477 10.6119 6.90953 11.1858 6.90953C11.7596 6.90953 12.2261 7.37477 12.2261 7.94595C12.2261 8.51713 11.7596 8.98171 11.1858 8.98171Z"
      fill="white"
    />
  </svg>
);

export const FTXIcon = ({ size = "17" }: { size?: string | number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6816 0.0395508H5.23204V3.68775H16.6816V0.0395508Z"
      fill="white"
    />
    <path d="M5.23204 5.07869H13.4668V8.71468H5.23204V5.07869Z" fill="white" />
    <path d="M5.23204 10.1056H8.92898V13.7538H5.23204V10.1056Z" fill="white" />
    <path
      d="M0.681641 5.07869H4.37859V8.72688H0.681641V5.07869Z"
      fill="white"
    />
  </svg>
);
