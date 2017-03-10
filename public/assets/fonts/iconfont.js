;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-favorfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.216 404.32c-3.808-11.36-13.632-19.68-25.504-21.504l-270.336-41.728-120.8-258.624C535.328 71.232 524.032 64.032 511.648 64c0 0-0.032 0-0.064 0-12.384 0-23.648 7.136-28.928 18.336l-121.856 258.016-270.72 40.8c-11.872 1.792-21.728 10.048-25.568 21.408-3.84 11.36-0.992 23.936 7.36 32.512l196.448 202.08L221.44 921.952c-1.984 12.096 3.104 24.256 13.12 31.328 9.984 7.072 23.168 7.808 33.888 1.92l241.824-133.024 241.312 133.856C756.416 958.656 761.76 960 767.104 960c0.256 0 0.48 0 0.64 0 17.696 0 32-14.304 32-32 0-3.968-0.704-7.776-2.016-11.296l-44.896-278.688 196.928-201.248C958.08 428.224 960.992 415.68 957.216 404.32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favor" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.104 959.936c-5.344 0-10.688-1.344-15.52-4.032l-241.312-133.856-241.824 133.024c-10.72 5.92-23.904 5.152-33.888-1.92-10.016-7.072-15.104-19.264-13.12-31.328l46.88-284.736-196.448-202.08c-8.256-8.512-11.168-20.928-7.456-32.192 3.68-11.296 13.312-19.616 25.024-21.632l155.072-26.592c17.632-2.944 33.984 8.736 36.96 26.144 2.976 17.408-8.704 33.952-26.144 36.96l-95.168 16.32 165.344 170.08c7.072 7.296 10.272 17.504 8.64 27.488l-38.816 235.68 199.616-109.824c9.632-5.312 21.344-5.312 30.944 0.064l199.168 110.464-38.016-235.776c-1.632-10.016 1.632-20.224 8.704-27.456l164.672-168.256-225.664-34.816c-10.56-1.632-19.584-8.416-24.128-18.08l-99.2-212.384-100.064 211.84c-7.552 16-26.624 22.816-42.624 15.264-15.968-7.552-22.816-26.624-15.264-42.624l129.152-273.44c5.312-11.2 16.576-18.336 28.928-18.336 0 0 0.032 0 0.064 0 12.416 0.032 23.68 7.232 28.928 18.464l120.8 258.624 270.336 41.728c11.872 1.824 21.696 10.144 25.504 21.504 3.776 11.36 0.864 23.936-7.488 32.48l-196.928 201.216 45.92 284.864c1.952 12.096-3.2 24.256-13.216 31.296C780 958.016 773.568 959.936 767.104 959.936z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-settings" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 608c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96S564.928 608 512 608zM512 480c-17.632 0-32 14.368-32 32s14.368 32 32 32 32-14.368 32-32S529.632 480 512 480z"  ></path>' +
    '' +
    '<path d="M631.04 960c-10.016 0-19.712-4.736-25.856-13.12l-73.408-100.48c-13.664 0.832-25.92 0.864-39.584 0l-73.376 100.48c-7.904 10.816-21.728 15.616-34.656 11.872-34.592-9.888-67.488-23.456-97.76-40.32-11.712-6.528-18.112-19.648-16.032-32.896l19.2-123.264c-9.824-8.704-19.136-18.016-27.84-27.808l-123.264 19.2c-13.056 1.984-26.336-4.352-32.896-16.064-16.896-30.368-30.464-63.296-40.32-97.824-3.68-12.864 1.056-26.72 11.904-34.624l100.448-73.376C177.152 524.96 176.928 518.4 176.928 512s0.224-12.96 0.672-19.776L77.12 418.816c-10.816-7.936-15.584-21.728-11.904-34.656 9.856-34.496 23.424-67.392 40.32-97.792 6.56-11.712 19.712-18.048 32.896-16.064l123.264 19.2c8.736-9.824 18.016-19.104 27.84-27.84l-19.2-123.264C268.288 125.184 274.72 112.064 286.432 105.536c30.4-16.896 63.296-30.464 97.76-40.32 12.928-3.648 26.72 1.056 34.656 11.904l73.376 100.448c13.568-0.896 25.824-0.896 39.584 0l73.408-100.48c7.904-10.848 21.664-15.52 34.656-11.904 34.464 9.856 67.328 23.424 97.76 40.32 11.712 6.528 18.112 19.648 16.064 32.896L734.432 261.76c9.824 8.736 19.104 18.016 27.808 27.776l123.328-19.2c13.152-2.016 26.336 4.384 32.864 16.032 16.896 30.4 30.496 63.296 40.352 97.824 3.648 12.896-1.088 26.688-11.904 34.624l-100.48 73.408c0.448 6.816 0.672 13.376 0.672 19.776s-0.224 12.96-0.672 19.776l100.48 73.376c10.816 7.904 15.552 21.728 11.904 34.624-9.856 34.496-23.424 67.424-40.352 97.824-6.528 11.712-19.488 18.048-32.896 16.064l-123.296-19.2c-8.672 9.76-17.984 19.072-27.808 27.776l19.232 123.296c2.048 13.248-4.352 26.368-16.064 32.896-30.24 16.832-63.136 30.4-97.76 40.32C636.928 959.584 633.984 960 631.04 960zM337.152 872.672c13.984 6.752 28.544 12.704 43.552 17.92l70.528-96.576c6.784-9.28 17.984-14.272 29.472-12.896 20.576 2.336 42.08 2.336 62.624 0 11.84-1.376 22.72 3.616 29.472 12.896l70.528 96.576c15.04-5.184 29.6-11.168 43.552-17.92l-18.432-118.368c-1.76-11.36 2.72-22.848 11.712-30.016 16.384-12.992 31.264-27.872 44.16-44.128 7.168-8.992 18.4-13.504 30.016-11.744l118.368 18.432c6.752-14.016 12.736-28.576 17.92-43.552l-96.576-70.528c-9.28-6.784-14.208-18.016-12.896-29.472 1.152-10.272 1.952-20.704 1.952-31.296s-0.768-21.024-1.952-31.296c-1.312-11.424 3.616-22.688 12.896-29.472l96.576-70.56c-5.152-15.008-11.168-29.568-17.92-43.552l-118.4 18.432c-11.328 1.696-22.816-2.688-29.984-11.744-12.896-16.256-27.776-31.104-44.16-44.128-8.992-7.168-13.472-18.592-11.712-29.984l18.432-118.4c-14.016-6.752-28.576-12.736-43.52-17.92l-70.56 96.576c-6.784 9.28-17.696 14.368-29.472 12.928-20.544-2.368-42.016-2.4-62.56 0-11.52 1.344-22.752-3.616-29.536-12.896l-70.528-96.576c-14.976 5.152-29.536 11.136-43.552 17.92l18.432 118.368c1.76 11.392-2.72 22.848-11.744 30.016-16.32 12.928-31.2 27.808-44.128 44.128-7.168 9.024-18.56 13.472-30.016 11.744l-118.368-18.432c-6.752 14.016-12.736 28.576-17.92 43.552l96.576 70.56c9.312 6.784 14.24 18.08 12.896 29.536C241.696 491.008 240.928 501.408 240.928 512s0.768 20.992 1.952 31.264c1.344 11.456-3.616 22.688-12.896 29.504l-96.576 70.528c5.184 15.008 11.168 29.568 17.92 43.552l118.368-18.432c11.392-1.76 22.848 2.752 30.016 11.744 12.896 16.32 27.744 31.168 44.128 44.128 9.024 7.168 13.504 18.624 11.744 30.016L337.152 872.672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-homefill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M947.2 422.4L572.8 115.2c-32-25.6-86.4-25.6-118.4 0L76.8 425.6c-12.8 6.4-16 22.4-9.6 35.2 3.2 12.8 16 19.2 28.8 19.2h32v364.8C128 892.8 163.2 928 211.2 928H416c19.2 0 32-12.8 32-32v-147.2c0-22.4 35.2-44.8 64-44.8 28.8 0 67.2 22.4 67.2 44.8V896c0 19.2 12.8 32 32 32h208c48 0 80-32 80-83.2V480h32c12.8 0 25.6-9.6 28.8-22.4 3.2-12.8 0-25.6-12.8-35.2z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-share" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M768.704 703.616c-35.648 0-67.904 14.72-91.136 38.304l-309.152-171.712c9.056-17.568 14.688-37.184 14.688-58.272 0-12.576-2.368-24.48-5.76-35.936l304.608-189.152c22.688 20.416 52.384 33.184 85.216 33.184 70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128c0 14.56 2.976 28.352 7.456 41.408l-301.824 187.392c-23.136-22.784-54.784-36.928-89.728-36.928-70.592 0-128 57.408-128 128 0 70.592 57.408 128 128 128 25.664 0 49.504-7.744 69.568-20.8l321.216 178.4c-3.04 10.944-5.184 22.208-5.184 34.08 0 70.592 57.408 128 128 128s128-57.408 128-128S839.328 703.616 768.704 703.616zM767.2 128.032c35.296 0 64 28.704 64 64s-28.704 64-64 64-64-28.704-64-64S731.904 128.032 767.2 128.032zM191.136 511.936c0-35.296 28.704-64 64-64s64 28.704 64 64c0 35.296-28.704 64-64 64S191.136 547.232 191.136 511.936zM768.704 895.616c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S804 895.616 768.704 895.616z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-service" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M835.2 588.8c6.4-16 0-35.2-16-41.6-16-6.4-35.2 0-41.6 16-16 28.8-80 44.8-169.6 44.8-19.2 0-32 12.8-32 32s12.8 32 32 32h9.6c83.2 0 185.6-16 217.6-83.2z" fill="#666666" ></path>' +
    '' +
    '<path d="M905.6 438.4l-41.6-16c-12.8-182.4-166.4-329.6-352-329.6-188.8 0-342.4 150.4-352 336l-19.2 12.8c-6.4 6.4-12.8 16-12.8 25.6v134.4c0 19.2 12.8 32 32 32s32-12.8 32-32v-115.2l19.2-12.8c6.4-6.4 12.8-16 12.8-28.8 0-160 128-288 288-288s288 128 288 288c0 12.8 9.6 25.6 22.4 28.8l41.6 16v108.8c0 19.2 12.8 32 32 32s32-12.8 32-32v-134.4c0-9.6-9.6-22.4-22.4-25.6z" fill="#666666" ></path>' +
    '' +
    '<path d="M512 649.6c-99.2 0-182.4-80-182.4-182.4 0-99.2 80-182.4 182.4-182.4 99.2 0 182.4 80 182.4 182.4 0 12.8 0 25.6-3.2 38.4-3.2 16 6.4 35.2 25.6 38.4 16 3.2 35.2-6.4 38.4-25.6 3.2-16 6.4-35.2 6.4-51.2 0-134.4-108.8-246.4-246.4-246.4s-246.4 108.8-246.4 246.4c0 86.4 44.8 160 112 204.8-112 38.4-195.2 128-217.6 246.4-3.2 16 6.4 35.2 25.6 38.4h6.4c16 0 28.8-9.6 32-25.6 25.6-131.2 140.8-217.6 288-217.6 19.2 0 32-12.8 32-32-3.2-19.2-16-32-35.2-32zM755.2 710.4c-12.8-9.6-35.2-9.6-44.8 6.4-9.6 12.8-9.6 35.2 6.4 44.8 44.8 35.2 99.2 89.6 115.2 172.8 3.2 16 16 25.6 32 25.6h6.4c16-3.2 28.8-19.2 25.6-38.4-19.2-102.4-86.4-169.6-140.8-211.2z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-peoplefill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-people" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800 384c0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 16 6.4 35.2 25.6 38.4h6.4c16 0 28.8-9.6 32-25.6 28.8-150.4 160-259.2 313.6-262.4h6.4c156.8 0 284.8-128 284.8-288zM288 384c0-124.8 99.2-224 224-224s224 99.2 224 224c0 121.6-99.2 220.8-220.8 224H505.6C384 604.8 288 505.6 288 384zM723.2 675.2c-16-9.6-35.2-6.4-44.8 9.6-9.6 16-6.4 35.2 9.6 44.8 73.6 51.2 124.8 121.6 140.8 204.8 3.2 16 16 25.6 32 25.6h6.4c16-3.2 28.8-19.2 25.6-38.4-19.2-99.2-80-185.6-169.6-246.4z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-circlefill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 602.208 896 424.96c39.328-37.888 63.968-90.944 63.968-149.728 0-114.688-93.312-208-208-208-57.216 0-109.088 23.232-146.752 60.736l-183.424 0c-37.888-39.328-90.912-63.936-149.696-63.936-114.688 0-208 93.312-208 208 0 58.752 24.608 111.808 63.904 149.664l0 180.576c-39.328 37.888-63.904 90.912-63.904 149.664 0 114.688 93.312 208 208 208 58.752 0 111.808-24.64 149.696-63.936l180.512 0c37.888 39.328 90.912 63.936 149.696 63.936 114.688 0 208-93.312 208-208C959.968 693.152 935.328 640.096 896 602.208zM464.032 832c10.304-24.672 16.064-51.68 16.064-80.064 0-114.688-93.312-208-208-208-28.384 0-55.424 5.76-80.096 16.096L192 464c24.672 10.336 51.712 16.064 80.096 16.064 114.688 0 208-93.312 208-208 0-28.352-5.76-55.392-16.064-80.064l97.44 0c-11.2 25.504-17.504 53.632-17.504 83.264 0 114.688 93.312 208 208 208 28.352 0 55.36-5.76 80.032-16.064l0 92.8c-24.672-10.304-51.68-16.064-80.032-16.064-114.688 0-208 93.312-208 208 0 28.384 5.76 55.392 16.064 80.064L464.032 832z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-circle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 602.208 896 424.96c39.328-37.888 63.968-90.944 63.968-149.728 0-114.688-93.312-208-208-208-57.216 0-109.088 23.232-146.752 60.736l-183.424 0c-37.888-39.328-90.912-63.936-149.696-63.936-114.688 0-208 93.312-208 208 0 58.752 24.608 111.808 63.904 149.664l0 180.576c-39.328 37.888-63.904 90.912-63.904 149.664 0 114.688 93.312 208 208 208 58.752 0 111.808-24.64 149.696-63.936l180.512 0c37.888 39.328 90.912 63.936 149.696 63.936 114.688 0 208-93.312 208-208C959.968 693.152 935.328 640.096 896 602.208zM751.968 131.264c79.392 0 144 64.608 144 144s-64.608 144-144 144-144-64.608-144-144S672.576 131.264 751.968 131.264zM272.096 128.064c79.392 0 144 64.608 144 144s-64.608 144-144 144-144-64.608-144-144S192.672 128.064 272.096 128.064zM272.096 895.936c-79.392 0-144-64.608-144-144s64.608-144 144-144 144 64.608 144 144S351.488 895.936 272.096 895.936zM464.032 832c10.304-24.672 16.064-51.68 16.064-80.064 0-114.688-93.312-208-208-208-28.384 0-55.424 5.76-80.096 16.096L192 464c24.672 10.336 51.712 16.064 80.096 16.064 114.688 0 208-93.312 208-208 0-28.352-5.76-55.392-16.064-80.064l97.44 0c-11.2 25.504-17.504 53.632-17.504 83.264 0 114.688 93.312 208 208 208 28.352 0 55.36-5.76 80.032-16.064l0 92.8c-24.672-10.304-51.68-16.064-80.032-16.064-114.688 0-208 93.312-208 208 0 28.384 5.76 55.392 16.064 80.064L464.032 832zM751.968 895.936c-79.392 0-144-64.608-144-144s64.608-144 144-144 144 64.608 144 144S831.36 895.936 751.968 895.936z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)