const category = [
    {
        id : 1,
        name : "Computer"
    },
    {
        id :2,
        name : "Freedge"
    },
    {
        id : 3,
        name : "T.V."
    },
    {
        id : 4,
        name : "Washng Machine"
    },
    {
        id : 5,
        name : "Celling Fan"
    },
    {
        id : 6,
        name : "oven"
    },
    {
        id : 7,
        name : "Printer"
    }

]

const Item = [
    {
        id : 1,
        img : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQC6IWXbKCltpBZumsn86wWYo8C0cHY6GMcsVKY08Elj3lXPRUlGAvBKT98S9H6DonIUyhLij3NXVNu-r4iWDV47A4W2R_Foq4Ef2oZe79s2nkkol-Ou5NwibLCnBeu&usqp=CAc",
        name : "Retro pc with mouse and keyboard",
        price : "1,30,698.96",
        category : "Computer"
    },
    {
        id : 2,
        img : "https://media.croma.com/image/upload/v1673263461/Croma%20Assets/Large%20Appliances/Refrigerator/Images/224939_0_kx1cil.png",
        name : "LG 260 L Frost Free Double Door 2 Star Convertible Refrigerator",
        price : "41,999",
        category : "Freedge"
    },
    {
        id : 3,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSn6sX4hTGzciAhVJz4a99zz66rpRoD6PkzyIUZ-vDeAMi2ApPPCi96tNFDZ5ApB4WyB2LShG-afbBOX_jvj2h5xPCgKGjkHcdtImV81-spODgUvnSQBL8n&usqp=CAE",
        name : "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UQ7500PSF",
        price : "1,29,000",
        category : "T.V."
    },
    {
        id : 4,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSei7itds1Iobo-2eNGktwRAHeaq2UGmIkTKC_Lwj03Sz3G7tI4rWVhuXQ5ErZcetqFPmXrI1jdeE5Y-4wbCxBcukucrGC5sprLBGgJt98usHJ1nCd3vWgq5Q&usqp=CAE",
        name : "Onida 6.5 Kg Washer Only (WS65WLPT1LR Liliput, Lava Blue)",
        price : "9,900",
        category : "Washng Machine"
    },
    {
        id : 5,
        img : "https://www.cnet.com/a/img/resize/2d2e0487bdd32b0892ba5538b1b1219ba72f5be0/hub/2016/10/27/a11c03cc-bc86-427c-b200-fa5c9f4e2f20/lginstaviewproductphotos-8.jpg?auto=webp&width=1200",
        name : "LG's Door-in-Door fridge comes with a magic window now - CNET Fridge",
        price : "1,34,900",
        category : "Freedge"
    },
    {
        id : 6,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDmqOPa8Fwvh_p4dGIBxknRi2P-V_PMvolTa8iMo-y8ebunOiKfp64ey49HrLKuW8dutMeS1wgp5dZlnYKtRZYTR0GO3YPBHriT4UiFaL6q9hNgqtSZ2qVFw",
        name : "HP All-in-One Desktop PC 22-dd2686in",
        price : "38,750",
        category : "Computer"
    },
    {
        id : 7,
        img : "https://m.media-amazon.com/images/I/81MRU+3RJLL._SX522_.jpg",
        name : "Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)",
        price : "89,900",
        category : "T.V."
    },
    {
        id : 8,
        img : "https://www.reliancedigital.in/medias/Whirlpool-192-Litre-Single-Door-493715199-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaDhhLzEwMDIzNzg0MDU0ODE0LmpwZ3w4Nzg2ZDZiZWJjNzMxNjFiMDQ1ODMzYTBiZDc4YzE5NjIyMzQ5ZTY0Y2E1YTBiY2UxMDU2M2Y0NzVjN2IyOWI0",
        name : "Whirlpool 192 Litre 3 Star Direct Cool Single Door Refrigerator, Wine Flower Rain Fridge",
        price : "29,900",
        category : "Freedge"
    },
    {
        id : 9,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrZtO_eAXORV6mdXDfnU1D8O_4YZoBEHESDj9kw52sEj3NjThKDOgfU_ihS8VTzrrQGCzrLE2SdDdyPIFw500h4-bDXzZEjxt6MSZvl6bmtzeQZhD7NI-hzPFs&usqp=CAE",
        name : "Whirlpool 8.5 kg 5 Star Semi-Automatic Top Loading Washing Machine",
        price : "15,900",
        category : "Washng Machine"
    },
    {
        id : 10,
        img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGjL2b-l2nNSSYiV-svA_VtddVT-Kld-454z7H8lt0EMgGSSivQWIexMAZZYAjKcrU3yQW6HR25AfxlykN_HQdSYE_XDD5&usqp=CAE",
        name : "Dell OptiPlex GX7010 Intel i7, 3rd Gen SFF Desktop PC ",
        price : "15,999",
        category : "Computer"
    },
    {
        id : 11,
        img : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR5ejMRiM7CrJdVGtCMAbHFjKVvjekJWwKd_SWaXjZQzgHtu-w6FlYx8mYIASytuNDbqa1q4yLb3AJtKZwPj2LLQ8rBhHZWWOUDFHOLaGL7O6DgmUEOeFjFEA&usqp=CAE",
        name : "Orient Electric Aeroquiet 1200MM Ceiling Fan (White)",
        price : "11,900",
        category : "Celling Fan"
    },
    {
        id : 12,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuAvEpDagvXEdwhIQwjTr335qGqvKdGN_S_bszgac3t-ivrS94TjV8IwHBvCKdWrmz36b376Z8leUbYUk4DY5lzryap7ZVrpklQ5Z9DUagKXB75O4Ji5VW&usqp=CAE",
        name : "Philips HD6975/00 25 L Digital Oven Toaster Grill (Grey)",
        price : "6,990",
        category : "oven"
    },
    {
        id : 13,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQamiLN-8RgOQLdxzaKU7gDfEXVDXl1QdU06f4zadhQ73Vx0kt_30iCO8ntgVahTO8AWAImy7clA1hXjYbUPry9C9_oCPU-CeWZrV7sRKOazKvKv-XElVSu&usqp=CAE",
        name : "Canon E4570 All-in-One Wi-Fi Ink Efficient Colour Printer",
        price : "7,900",
        category : "Printer"
    },
    {
        id : 14,
        img : "https://razacomputers.in/wp-content/uploads/2024/01/used-branded-hcl-computer-intel-core-2-duo-500gb-hdd-128gb-ssd-4gb-ram.jpeg",
        name : "Branded HCL Computer",
        price : "6,900",
        category : "Computer"
    },
    {
        id : 15,
        img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjaIfJbOoLZdGqsQgBqcOmQtsxluFeqaXdEYemZxP-F2dHESRlNQraNFOvbZo4rc1hkfifxW0JxvTqP_2pa9YVaz1aDFIMpyMaa3U0JpInJqU-XdIolAjwAw&usqp=CAE",
        name : "Sony 59.9 cm (24 inches) Bravia KLV-24P413D HD Ready LED TV",
        price : "14,990",
        category : "T.V."
    },
    {
        id : 16,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwNmqeFyqMKOqsL89--oV6exLxKyGqilghSf8DRShdbr7FkkZXzU944HSE79gPufLgPsNmPyjuoPBhKtbJffQgTLj08mrBjzQucP79T7U&usqp=CAE",
        name : "Canon MG3070s Color All in One Inkjet Printer",
        price : "5,900",
        category : "Printer"
    },
    {
        id : 17,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTI1aFez3seEw5Ms7t_hsxMw9wA9a0gkFM1MVd9FqD9fJIYHYwRDZUhKkBuaR7uSZ-mFsYGtlJVPG_mPc5ceE6tPHk64XqF944KW7yWDlTbciFBeX7v51s2Bw&usqp=CAE",
        name : "V-Guard Gatimaan Pro AS Ultra High-Speed Ceiling Fan",
        price : "4,900",
        category : "Celling Fan"
    },
    {
        id : 18,
        img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTaufRDiMd8AQNWdhk8T9hxmqaMTyAN4J_r8wTQyidIJRXjjsk_9GpQxzgtuvvi1nMR4Lp-Ai_WxEEACyT6i7LoxOqg1pOQGrqVez1klHjcLk9ZQvOt_Aqz&usqp=CAE",
        name : "IFB 656 MTC/E-RCT 58 L Enamelled Cavity Built-in Oven",
        price : "42,990",
        category : "oven"
    },
    {
        id : 19,
        img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCUw0xEn0Nokl9yUY3-PhW_rhQ2jpAzV2a91DUDZ3ucUSSg_Rk8FurqA40z2SqA0OVBzxtbAAopGH4WCbDHRhhQg9qhzL7gH7Py4C3MGXMmgqB4XnziVKn&usqp=CAE",
        name : "HP M126nw LASERJET PRO MFP PRINTER",
        price : "19,500",
        category : "Printer"
    },
    {
        id : 20,
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645558306366",
        name : "Studio Display",
        price : "1,59,900",
        category : "T.V."
    },
    {
        id : 21,
        img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtRLNm3zpKOTGZEtDHb536WA0r2pgfjYG1ssQnb5HmsCSNrOvsH-MiEV8MVT3SLabfPcx1NEk8irSAHYZee2f50NHo0Qn5JidjEvm72gSCpLv629X-BYiuVA&usqp=CAE",
        name : "Croma 8.5 kg 5 Star Semi Automatic Washing Machine",
        price : "10,499",
        category : "Washng Machine"
    },
    {
        id : 22,
        img : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ3Lm0VAg-erB8FhyVd2DXatb5S47TEX472Hoo_OqqJpVig0e2EfgxIBuTRVbVVIEQ-BwkxwDZOUf6k217ogJ2yJt78r5B_34PFJnAerBMN&usqp=CAE",
        name : "Bosch HBF133BR0I Series 2 Built-in oven 60 x 60 cm Stainless steel",
        price : "55,990",
        category : "oven"
    },
    {
        id : 23,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdAoBq1deYeJD5avFT8smuyoF9v7sPJFvytcR1n3ciK_bnXkpV29mzNsuHYBwVjR6-4Y31MSe1T9Nc2u1h6Fcl4ZNNsLsz8g&usqp=CAE",
        name : "Samsung (32 inch) HD Ready LED TV ",
        price : "22,000",
        category : "T.V."
    },
    {
        id : 24,
        img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBKSEy97E33m99MM72ebMGb_k7v4B9JETCHvT9jhZEIYcfNEpq8YWM07F-2Tw7JtpD4mJtyVdN7v1wulrbMgfc4HSPLg-ueg0paJgjqtXDigIInW0IsSc8uw&usqp=CAE",
        name : "Apex Prime BEE Star Rated Ceiling Fan ",
        price : "4,546",
        category : "Celling Fan"
    },
    {
        id : 25,
        img : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEvW7CwLn5Qee9Y7EHae06ddxsUK9-5B1txGFb-KHowTrdgdYm0psTBnZQvwOSIF9fXWd5pZb9jx3PT070yIecuS1JAmtpVjvs1JsfJCN6k9qhH_eNml9F&usqp=CAE",
        name : "100 inch 4K LED TV/Super TV with android OS",
        price : "₹ 9,14,574.00",
        category : "T.V."
    },
    {
        id : 26,
        img : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQs18BdZ4hX1sQMvr4aGqbxIcVz3bWB18Y_8xvpV1di2dsY3oTclP1gofEEZCPHexepHdJKRtp6m6hjWZsVUEyIFN0AOs86EXteXf5HF5hgNGwTL_nl1wtO&usqp=CAE",
        name : "Faber Built Oven In FBIO 80L 6FBK",
        price : "39,990",
        category : "oven"
    },
    {
        id : 27,
        img : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSduOdPTerI0JDhAf78fxkCcZPeh8OQmaqWbFIeKjvQKXYblFycNSVi-c0FVWpqRXd9KlPUrz1NemTDYWP_PwYjkmz2qmG9rzIhQax7k1K5HiIqD3LWGKDt&usqp=CAE",
        name : "Anchor Rivia Antique Silver 320rpm Ceiling Fan",
        price : "9,546",
        category : "Celling Fan"
    },
    
    {
        id : 28,
        img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRo-S2BRd5J3DmOsTS4A-Mf3Y-Elq5dif2iT18rkp9yesyd8l6FdDUmrYqCytX_qzyHoUFS0ekhChXkC0eNiwGAy0pbh3lf5KBrbrIYo1M90QFLW0wbiEnz&usqp=CAE",
        name : "Electric Semi-Automatic Used Washing Machine",
        price : "5,499",
        category : "Washng Machine"
    },
    {
        id : 29,
        img : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzhVCClATw4xOzH6NNz-kMv8HwgQRT2GrC_yAKtENlvbQPcdfHOV3USbp4ak2qFZgRu_RWjw07a_oGr9h34Sozp6aeHZptqaWQQL5I3Gxk3G1oy-Zcshpd&usqp=CAE",
        name : "Samsung LED TV 49 Inch HG49AJ690",
        price : "1,59,900",
        category : "T.V."
    },
    {
        id : 30,
        img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtTe-4qspiFqWJguO1mQGtIE5vpBPE7Rg7yu0e-11m-OGZMC-6FKrmaahUvTFyiJKrU2Oh4BKipSAafp3V-FHFseClL4ivPlPA74RHSPNTaN9peJG031vf&usqp=CAE",
        name : "Faber Fbio 80L 8F 60 Built-In Oven",
        price : "49,990",
        category : "oven"
    }
]

export {category, Item}