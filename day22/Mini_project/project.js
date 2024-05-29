import { backendData } from "./backend.js";
const main = document.querySelector(".main");
const info__top__type = document.querySelector(".info__top__type");
const info__top__title = document.querySelector(".info__top__title");
const info__top__gym = document.querySelector(".info__top__gym");
const info__top__local = document.querySelector(".info__top__local");

const score = [5.0, 4.9];
const review = ["(4)", "(12)"];
const passType = ["일일권 다짐회원", "다짐회원"];
const price = ["27,500원~/월", "38,500원~/월"];
const sale = ["15%"];
backendData.result.liteAdList.map(
  ({ gymPhotoSmall, tags, gymName, address, service, program }, i) => {
    const result = `
  



        <!-- 첫번째 메인 시작 -->

        <div class="contentBox top_margin">
            <div class="contentBox__top ">
                <div class="contentBox__top__img">
                <img src="${gymPhotoSmall}" alt="">
                </div>

                <div class="info">
                    <div class="info__top">
                        <div class="info__top__type">
                        <span>${tags}</span>
                        </div>
                        <div class="info__top__gymName">
                        <span>${gymName}</span>
                        </div>
                    <div class="info__topo__star">
                        <span class="star">
                            <i class="fa-solid fa-star "></i>${score[i]}
                        </span>
                            <span class="review">${review[i]}</span>
                            <span class="info__top__local">${address}</span>
                    </div>
                       
                </div>
                    
                    <div class="info__bottom">
                        <div class="info__bottom__dayPass">
                            <span class = "info__bottom__dayPass__passType">${
                              passType[i]
                            }</span>
                           
                           ${
                             i == 0 ? `<span class="sale"> ${sale} </span>` : ""
                           }
                            <span class="info__bottom__price">${price[i]}</span>
                        </div>
                  
                    
                    </div>
                </div>
            </div>

            <div class="contentBox__bottom">
                <div class="contentBox__bottom__info">

                    
                     

                        ${
                          program.free
                            ? `
                            <div class="freeProgramBox">
                                <span class="freeProgram">무료프로그램</span>
                                <span>${program.free}</span>                             
                            </div>`
                            : ""
                        }

                       
                   

                    <div class="freeServiceBox">
                        <span class="freeService">무료서비스</span> 
                        <span>${service.free}</span> 
                    </div>
                </div>  
            </div>
        
        </div>

        <!-- 첫번째 메인 끝 -->
      </section>
    `;
    main.insertAdjacentHTML("beforeend", result);
  }
);
