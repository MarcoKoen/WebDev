
            let carouselClass = document.querySelector(".glide__slides");

            (async() => {
                const config = {
                    type: 'carousel',
                    perView: 4,
                    breakpoints: {
                        800: {
                        perView: 2
                        }
                    }
                }
                
                let firstFetch = await fetch("https://mighty-river-48400.herokuapp.com/api/data");
                let oceaniaBreaksData = await firstFetch.json();
                let oceaniaArray = oceaniaBreaksData.Oceaniabreaks;
                console.log(oceaniaArray);

                oceaniaArray.forEach((element, index) => {
                    let nextPhoto = element.image;
                    let li = document.createElement("li");;
                    let img = document.createElement('img');
                    img.className = "glide__slide";
                    img.src = ("https://mighty-river-48400.herokuapp.com/img/" + nextPhoto);
                    li.append(img)
                    carouselClass.append(li);
                });

                let glide = new Glide('.glide',config);                    
                glide.mount();
            })();

           


            const mobileBtn = document.querySelector('#mobile-cta')
                nav = document.querySelector('nav')
                mobileBtnExit = document.querySelector('#mobile-exit');
            
            mobileBtn.addEventListener('click', () =>{
                nav.classList.add('menu-btn');
            })

            mobileBtnExit.addEventListener('click', () =>{
                nav.classList.remove('menu-btn');
            })

            let nameSales = ['Kate','Caleb','Matilda','Marco','Ben','Josh','Artem','Zach','Ruben','Tom','Carlson'];
           let productName = [{id:"0", name:"Prizm Hobby Box", image:"images/prizm.webp"},
                              {id:"1", name:"Chronicles Hobby Box", image:"images/chronicles.jpg"}, 
                              {id:"2", name:"Euro Mosaic Hobby Box", image:"images/Mosaic.png"}, 
                              {id:"3", name:"Immaculate Hobby Box", image:"images/immaculate.jpg"} 
                            ];
            let timeArray = ['1 hour ago', '30 minutes ago', '2 hours ago', '1 minute ago', 'right now'];



            let notificationText = document.querySelector(".custom-notification-content");
            let productPhoto = document.querySelector(".custom-notification-image-wrapper");
            let productPhotoSrc = document.querySelector(".notif-image");

            setInterval(function(){ $(".custom-social-proof").stop().slideToggle('slow', () => {
                if($(".custom-social-proof").is(":hidden")){
                    let randomName = Math.floor(Math.random() * nameSales.length);
                    let randomProduct = Math.floor(Math.random() * productName.length);
                    let randomTime = Math.floor(Math.random() * timeArray.length);
                    productPhotoSrc.src = productName[randomProduct].image;
                    notificationText.innerHTML = nameSales[randomName] + " Purchased  <br>" + productName[randomProduct].name + "<br>" + timeArray[randomTime];
                }
            }); }, 3000);
          
          
          
            $(".custom-close").click(function() {
                $(".custom-social-proof").stop().slideToggle('slow');
            });
            
        
        



