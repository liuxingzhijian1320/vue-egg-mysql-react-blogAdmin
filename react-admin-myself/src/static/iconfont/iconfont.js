import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1542100890770'); /* IE9*/
    src: url('./iconfont.eot?t=1542100890770#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAecAAsAAAAACwgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8d0i3Y21hcAAAAYAAAAB7AAAB3jG3apVnbHlmAAAB/AAAA4cAAARg1VjBFWhlYWQAAAWEAAAALwAAADYTQLUFaGhlYQAABbQAAAAcAAAAJAfeA4hobXR4AAAF0AAAAA4AAAAcHAAAAGxvY2EAAAXgAAAAEAAAABADKARCbWF4cAAABfAAAAAfAAAAIAEWAFhuYW1lAAAGEAAAAUUAAAJtPlT+fXBvc3QAAAdYAAAAQwAAAFVbyPHWeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMT47ytzwv4EhhrmBoQEozAiSAwDr2QypeJztkdEJwkAQRN96ySJBbCK/fqeR+GE5fqWztDJtxN1bQbEG53gHM3C3sAOMQAtuwQC2YaSekVrPG1PPB+7hr5w54TK5Zi1atR8H/PovWbz5nJzi8cMYecw1569Lvx9v57nNIhuRFz2fi9gfWopsUGuRjWkvaC/iByLXAHicVVLPb9xEFJ43Y3ua7Xrttb122U2ytd1dtyT707t2NpBNQ4FU9IfIBSooLVTih4LKpTlRUCttEULhRrnRShEtQqhqRRX20ja0IhUHVKTkFA490b+AE1S7Ds+bBlFp/L35ZuYbv/e9IZSQza/ZMv2WjJL9hEDRqxW9Ipd4jCngNcm0wHwOghDCNnBJAZAcb3AMeVgLrFHIx1thPLNMdsmo1qZmXy6XSs2Ds+0TGWtPCL5qMlOBitAszqhjNPoNGIselFOKph31W5O5mqGo1rNma7I2p2rwsF2p6Ja+08mndMs43p79PIweqJCGCm1+EU6MAeop+OUwmGgcVnWV70rLsmGJiqYerbUIIXFNv7A7bIpoWBUpYHJl8LAYTLAehFwPC8hxFXkK6N3cKAirX11cZWz14pFOlf29t//n2SuMXTn7cYy98Q9al9cEYe0y4kxLjP4Zuypc73RuMHaj07lOiID/u89W2PMkRwqkRCbQR6/oKCBxHEyyTL8eFtDBYBqChge+xUMrY5i+BxZUoOmBoYAXBnkwM+yH5UxonGcQXRXpaTGZkEUBjnEJ3qTwqa73P3tV6c+VNdmF3bejh+bbB+gZOn9rXmA/AV1Y1vXzjEbfSTy6qaWG4H0qwUlKPzEmjCjfOPw4MSdrP4J9K/rjCJxKA4GBVFimlDCs4R77mU2TOmmTV7ACjiVIRh5cRHwAme1omOhh068HjeIYbMcQ0Xli8cBu9n+Hu90uTyelpdNDyeTQ4rkYzyW1JGzNFmP8aElKpu+s9ESxt7KF1x4JwqNrA6TvdLuSrPIlFL2B34VYceEJWeKqvPGfaqXXu7ktQxz0ZpPdxfI4UcgeUiHEdj2bu+DrrOi52B8x8Osj4DZdyXWKzcY0NFyHY9pxh+rBFD6Q9w5GGy+9C8qpFz8UJSryediots9MgD1TDudP7J+snNw7sjtbqK6vMxLtg2m16OrRPXF44X4lqO57LZU8VDgmDj+TGa4X8D0SEXP6i60zmewiVdIiL5BDuFimYdNF19Jom42+pdFNm0sMQxqpXzdH0Gbfxu00HoNRiK13JCtuyFMTmNyhJOAbexxg3GaiXQIo2dHrXw79qmcBsvolWV9M7ITvjZgZ/UXQchqONW1Yw7G+xWSQlMRbUHKg78QXOBFgXOD0MWQzERg50OXjCzsgZ8BmJgvR73Ks0lJPBfIvXvXoVgB4nGNgZGBgAOJTTonO8fw2Xxm4WRhA4IbAjlkI+v9UFgZmeyCXg4EJJAoAGH8JuQB4nGNgZGBgbvjfwBDDwgACQJKRARWwAwBHDQJweJxjYWBgYMGBAQHcAB0AAAAAAAAAagCiAQQBcAG6AjB4nGNgZGBgYGfwYWBlAAEmIOYCQgaG/2A+AwAQ5gFvAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJ2RiZGZkYWRlZGNkZ2Rg4EzMbMiMy8nvyyVrTg1sSg5gykpk6UwMzGPyTGRFShTkcnAAADxiwvlAA==') format('woff'),
    url('./iconfont.ttf?t=1542100890770') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1542100890770#iconfont') format('svg'); /* iOS 4.1- */
  }


  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

/*.icon-search:before { content: "\e623"; }

.icon-bi:before { content: "\e6c5"; }

.icon-Aa:before { content: "\e636"; }

*/