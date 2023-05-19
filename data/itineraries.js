const itineraries = [
    {
        id: "1",
        name: "ONE DAY PROGRAMS",
        description: "In and around Addis Ababa there are a number of exciting attractions. Take one of our day programs and enjoy a visit",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE101",
                name: "Full-day city tour –Addis Ababa ",
                duration: "1"
            },
            {
                code: "BNE102",
                name: "Explore Debre  Zeit  and its crater lakes",
                duration: "1"
            },
            {
                code: "BNE103",
                name: "Excursion Melka Kuntere and Adadi Mariam Rock hewn ",
                duration: "1"
            },
            {
                code: "BNE104",
                name: "Excursion to Menagesh and Addis Alem forest ",
                duration: "1"
            },
            {
                code: "BNE105",
                name: "Excursion to Debre Libabos monastery, Old Portuguese bridge ",
                duration: "1"
            },
            {
                code: "BNE106",
                name: "Excursion to Sodere resort",
                duration: "1"
            },
        ]
    },
    {
        id: "2",
        name: "SHORT DURATION PROGRAMS",
        description: "Take a few days to explore some of Ethiopia’s beautiful lakes, national parks, and rift valley or perhaps visit the walled city of Harar and see the hyena Man!",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE201",
                name: "Lake Langano, Shala and Abijata (2 days)",
                duration: "2"
            },
            {
                code: "BNE202",
                name: "Bahir Dar, Gondar, Lalibela and Axum ( 3days)",
                duration: "3"
            },
            {
                code: "BNE203",
                name: "Rift valley lakes (3 days)",
                duration: "3"
            },
            {
                code: "BNE204",
                name: "Awash National park (3 days)",
                duration: "3"
            },
            {
                code: "BNE205",
                name: "Harar and Dire Dawa (3 days)",
                duration: "3"
            },
            {
                code: "BNE206",
                name: "Lake Langano, Shala, Wondogenet, Awassa (4 days) ",
                duration: "4"
            },
            {
                code: "BNE207",
                name: "Arbaminch, Dorze, Abaya and Chamo Lakes and Nech  Sar National Park (3 days)",
                duration: "3"
            },
            {
                code: "BNE208",
                name: "Jimma and Gambella (5 days)",
                duration: "5"
            },
            {
                code: "BNE209",
                name: "Bale National park (4 days)",
                duration: "4"
            },
            {
                code: "BNE210",
                name: "Ambo and Wonchi crater Lake (2 days)",
                duration: "2"
            },
        ]
    },
    {
        id: "3",
        name: "HISTORIC ROUTE AND NORTHERN CIRCUIT",
        description: "Embark on a captivating journey through Ethiopia's ancient historical sites, including the awe-inspiring churches of Lalibela and the majestic castles of Gondar.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE301",
                name: "Historic Route Bahir Dar (By air) (1 day).",
                duration: "1",
            },
            {
                code: "BNE302",
                name: "Historic Route Gonder (By air) (1day)",
                duration: "1",
            },
            {
                code: "BNE303",
                name: "Lalibela (By air) (1 day) ",
                duration: "1",
            },
            {
                code: "BNE304",
                name: "Axum (By air) (2 days) ",
                duration: "2",
            },
            {
                code: "BNE305",
                name: "Bahir Dar (By air) (1 night)",
                duration: "1",
                program: [
                    {
                        day: "1",
                        description: "Fly to Bahir Dar City tour- Emperor- Haile Sellasie Palace & boat trip on Lake Tana to Visit monasteries"
                    },
                    {
                        day: "2",
                        description: "Trip to Blue Nile Falls Colorful market of Bahir Dar and flight to Addis."
                    },
                ],
            },
            {
                code: "BNE306",
                name: "Historic Route Gondar (By air) (1 nights)",
                duration: "1",
                program: [
                    {
                        day: "1",
                        description: "Fly to Gonder, Visit Royal Enclosure, Fasilidas Bath and Debre Birhan Sellasie Church"
                    },
                    {
                        day: "2",
                        description: "Fly back to Addis"
                    },
                ],
            },
            {
                code: "BNE307",
                name: "Historic Route Lalibel (By air) (2 nights)",
                duration: "2",
                program: [
                    {
                        day: "1",
                        description: "Fly to Lalibela, visit Rock hewn churches"
                    },
                    {
                        day: "2",
                        description: "Lalibela Rock-Hewn"
                    },
                    {
                        day: "3",
                        description: "Fly back to Addis Ababa"
                    },
                ],
            },
            {
                code: "BNE308",
                name: "Historic Route- Bahir dar  & Axum (By air) (3 days)",
                duration: "3",
                program: [
                    {
                        day: "1",
                        description: "Fly to Bahir Dar- city tour"
                    },
                    {
                        day: "2",
                        description: "Boat trip on Lake Tana to visit monasteries and visit Blue Nile Falls"
                    },
                    {
                        day: "3",
                        description: "Fly to Axum, visit archeological sites"
                    },
                    {
                        day: "4",
                        description: "Fly to Addis Ababa"
                    },
                ],
            },
            
            {
                code: "BNE309",
                name: "Historic Route- Bahir Dar and Lalibela (By air) (4 days)",
                duration: "4",
                program: [
                    {
                        day: "1",
                        description: "Fly to Bahir Dar, Boat trip on Lake Tana to visit monasteries  and  city tour "
                    },
                    {
                        day: "2",
                        description: "Fly to Lalibela, visit the Rock hewn churches"
                    },
                    {
                        day: "3",
                        description: "Explore more rock churches in Lalibela"
                    },
                    {
                        day: "4",
                        description: "Fly Back to Addis Ababa –city tour"
                    },
                ],
            },
            {
                code: "BNE310",
                name: "Historic Route: Gondar and Lalibela (By air) (3 days)",
                duration: "3",
                program: [
                    {
                        day: "1",
                        description: "Fly to Gondar, visit Royal Enclosure, Fasildas Bath and Debre Birhan Sellassie Church"
                    },
                    {
                        day: "2",
                        description: "Fly to Lalibela, visit the Rock hewn churches"
                    },
                    {
                        day: "3",
                        description: "Fly Back to Addis Ababa"
                    },
                ],
            },
            {
                code: "BNE311",
                name: "Historic Route: Gondar and Axum (By air) (3 days)",
                duration: "3",
                program: [
                    {
                        day: "1",
                        description: "Fly to Gondor visit Royal Enclosure, Fasildas Bath, and Debre Birhan Sellasies Church."
                    },
                    {
                        day: "2",
                        description: "Fly to Axum, visit archeological sites"
                    },
                    {
                        day: "3",
                        description: "Fly back to Addis Ababa"
                    },
                ],
            },
            {
                code: "BNE312",
                name: "Historic Route: Lalibeal and Axum (By air) (3 days)",
                duration: "3",
                program: [
                    {
                        day: "1",
                        description: "Fly to Lalibela visit the rock hewn churches"
                    },
                    {
                        day: "2",
                        description: "Fly to Axum, visit the archaeological sites"
                    },
                    {
                        day: "3",
                        description: "Fly back to Addis Ababa"
                    },
                ],
            },
            {
                code: "BNE313",
                name: "Historic Route: Bahir Dar and Gondar (By air) (3 Days)",
                duration: "3",
                program: [
                    {
                        day: "1",
                        description: "Fly to Bahir Dar- city tour including Haile Selasies palace"
                    },
                    {
                        day: "2",
                        description: "Boat trip on Lake Tana to visit monasteries and trip to Bule Nile Falls"
                    },
                    {
                        day: "3",
                        description: "Fly to Gondar, Visit Royal Enclosure, Fasildas bath and Debre Birhan Sellassi church."
                    },
                    {
                        day: "4",
                        description: "Fly back to Addis Ababa"
                    },
                ],
            },
            {
                code: "BNE314",
                name: "Lalibela and Axum (By air)(4Day)",
                duration: "4",
            },
            {
                code: "BNE315",
                name: "Bahir Dar, Gondar, Lalibela (By air) (4 days)",
                duration: "4",
            },
            {
                code: "BNE316",
                name: "Bahir Dar, Lalibela, Axum (By air) (4 days)",
                duration: "4",
            },
            {
                code: "BNE317",
                name: "Gondar, Lalibela, Axum (By air) (5 days)",
                duration: "5",
            },
            {
                code: "BNE318",
                name: "Bahir Dar, Gondar, Lalibela, Axum (By air) (7 days)",
                duration: "7",
                program: [
                    {
                        day: "1",
                        description: "Arrival in Addis Ababa and city tour"
                    },
                    {
                        day: "2",
                        description: "Fly to Bahir Dar- City tour"
                    },
                    {
                        day: "3",
                        description: "Boat trip on Lake Tana to visit monasteries and trip to Blue Nile"
                    },
                    {
                        day: "4",
                        description: "Fly to Gondar, Visit Royal Enclosure, Fasildas Bath and Debre Birhan Selassies Church "
                    },
                    {
                        day: "5",
                        description: "Fly to Axum, visit the archeological sites."
                    },
                    {
                        day: "6",
                        description: "Fly to Lalibela, visit the Rock hewn churches "
                    },
                    {
                        day: "7",
                        description: "Fly back to Addis Ababa"
                    },
                ],
            },
            
            {
                code: "BNE319",
                name: "Historic Route: Bahir Dar, Gondar, Axum, Lalibela (By air and car) (12 days)",
                duration: "12",
                program: [
                    {
                        day: "1",
                        description: "Arrival at Addis Ababa and city tour"
                    },
                    {
                        day: "2",
                        description: "Fly to Bahir Dar- City tour"
                    },
                    {
                        day: "3",
                        description: "Bahir Dar Blue Nile Falls and Lake Tana monasteries"
                    },
                    {
                        day: "4",
                        description: "Drive to Gondar  to visit the royal castles and church"
                    },
                    {
                        day: "5",
                        description: "Drive to Axum through the Semien Mountains"
                    },
                    {
                        day: "6",
                        description: "Explore Axum archeological sites and church"
                    },
                    {
                        day: "7",
                        description: "Drive to  Mekele via Debre Damo monastery & Yeha"
                    },
                    {
                        day: "8",
                        description: "Full day scenic drive to Lalibela"
                    },
                    {
                        day: "9",
                        description: "Lalibela Rock hewn churches"
                    },
                    {
                        day: "10",
                        description: "Lalibela  explore outstanding churches"
                    },
                    {
                        day: "11",
                        description: "Flight to Addis Ababa"
                    },
                    {
                        day: "12",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE320",
                name: "Historic Route Bahir Dar, Gondar Lalibela Axum ( By air and car ) (9 days)",
                duration: "9",
                program: [
                    {
                        day: "1",
                        description: "Arrival at Addis Ababa and city tour"
                    },
                    {
                        day: "2",
                        description: "Fly to Bahir Dar, city tour"
                    },
                    {
                        day: "3",
                        description: "Boat trip on Lake Tana and excursion to Blue Nile Falls"
                    },
                    {
                        day: "4",
                        description: "Drive to Gondar visit the Royal Enclosure and Debre Birhan Sellasies Church"
                    },
                    {
                        day: "5",
                        description: "Fly to Lalibela, Visit Rock hewn churches"
                    },
                    {
                        day: "6",
                        description: "Explore more rock hewn churches in Lalibela"
                    },
                    {
                        day: "7",
                        description: "Fly to Axum, visit archaeological sites"
                    },
                    {
                        day: "8",
                        description: "Excursion to visit Yeha the capital of the earliest kingdom of Ethiopia"
                    },
                    {
                        day: "9",
                        description: "Fly back to Addis Ababa"
                    },
                ],
            },
            {
                code: "BNE321",
                name: "Historic Route Bahir Dar, Gondar, Axum and Lalibela.(By car) (13 days)",
                duration: "13",
                program: [
                    {
                        day: "1",
                        description: "Arrival and city tour in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Addis Ababa – Debre Libanos monastery- Blue Nile Gorge- Bahir Dar"
                    },
                    {
                        day: "3",
                        description: "Visit Lake Tana’s monasteries and Blue Nile Falls"
                    },
                    {
                        day: "4",
                        description: "Drive to Gondar: castles and churches"
                    },
                    {
                        day: "5",
                        description: "Drive  to Axum through the Semien Mountain and Tekeze Gorge O/N Axum"
                    },
                    {
                        day: "6",
                        description: "Explore Axum:  the church and archaeological sites"
                    },
                    {
                        day: "7",
                        description: "Drive to Gheralta via Yeha temple- Debre Damo Monastry"
                    },
                    {
                        day: "8",
                        description: "Explore the rock churches in Tigray"
                    },
                    {
                        day: "9",
                        description: "Drive to Lalibela "
                    },
                    {
                        day: "10",
                        description: "Explore the rock churches in Lalibela"
                    },
                    {
                        day: "11",
                        description: "Excursion to Yemrhana Kirstos  and continue on visiting rock churches in Lalibela"
                    },
                    {
                        day: "12",
                        description: "Drive to Kombolcha  via Haik Estifanos monastery"
                    },
                    {
                        day: "13",
                        description: "Drive to Addis Ababa and Departure"
                    },
                ],
            },
            {
                code: "BNE322",
                name: "Historic Route Bahir Dar, Gondar, Axum , Lalibela, Dire Dawa and Harar (By air and car) (15 days)",
                duration: "15",
            },
            {
                code: "BNE323",
                name: "Historic Route + Tigray rock churches (14 days)",
                duration: "14",
                program: [
                    {
                        day: "1",
                        description: "Arrival at Addis Ababa and city tour"
                    },
                    {
                        day: "2",
                        description: "Drive to Kombolcha"
                    },
                    {
                        day: "3",
                        description: "Drive to Lalibela"
                    },
                    {
                        day: "4",
                        description: "Lalibala"
                    },
                    {
                        day: "5",
                        description: "Lalibela- Woldiya – Ambalage Mountains, Lake Ashenge Mekele"
                    },
                    {
                        day: "6",
                        description: "Visit Wukro Mariam, AbrahaweAtsebha, Abuna Abraham rock churches"
                    },
                    {
                        day: "7",
                        description: "Visit Aba Yohannis & Gabriel Wukiro rock church O/N Axum"
                    },
                    {
                        day: "8",
                        description: "Axum: Church and archaeological sites"
                    },
                    {
                        day: "9",
                        description: "Drive to Simien Mountain "
                    },
                    {
                        day: "10",
                        description: "Explore the Simien and drive to Gonder Drive to Bahir Dar and Blue Nile Falls"
                    },
                    {
                        day: "11",
                        description: "Explore Gonder and drive to Bahir Dar"
                    },
                    {
                        day: "12",
                        description: "Visit the monasteries on Lake Tana and Blue Nile falls"
                    },
                    {
                        day: "13",
                        description: "Drive to Addis Ababa "
                    },
                    {
                        day: "14",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE324",
                name: "Trekking to Simien mountain and Gondar (By air & surface) (13 days)",
                duration: "13",
                program: [
                    {
                        day: "1",
                        description: "Arrival at Addis Ababa "
                    },
                    {
                        day: "2",
                        description: "Flight to Gondar: Castles & churches"
                    },
                    {
                        day: "3",
                        description: "Drive to Sankaber National Park "
                    },
                    {
                        day: "4",
                        description: "Start trekking 8 days: Sankaber-Geech "
                    },
                    {
                        day: "5",
                        description: "Geech-Chenek "
                    },
                    {
                        day: "6",
                        description: "Chenek-Ambilco"
                    },
                    {
                        day: "7",
                        description: "Ambilco-Ras Dashan (4620 mts) & back"
                    },
                    {
                        day: "8",
                        description: "Ambilco-Alquso "
                    },
                    {
                        day: "9",
                        description: "Alquso- Abegina "
                    },
                    {
                        day: "10",
                        description: "Abergina- Michibi "
                    },
                    {
                        day: "11",
                        description: "Michibi- Debark, meet vehicles and return to Gondar "
                    },
                    {
                        day: "12",
                        description: "Flight to Addis Ababa"
                    },
                    {
                        day: "13",
                        description: "Departure"
                    },
                ],
            },
        ]
    },
    {
        id: "4",
        name: "SOUTHERN CIRCUIT",
        description: "Immerse yourself in the natural beauty of Ethiopia's southern region, with visits to national parks, lush landscapes, and tribal communities.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE401",
                name: "Rift Valley Lakes Arba Minch, Konso (7days) ",
                duration: "7",
            },
            {
                code: "BNE402",
                name: "Omo Valley Program, Arba Minch, Mago Park, Turmi Rift Valley Lakes (14 days)",
                duration: "14",
                program: [
                    {
                        day: "1",
                        description: "Arrival in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Drive to Langano and Shala- Abyata Lakes"
                    },
                    {
                        day: "3",
                        description: "Langano- Arbaminch and visit Chencha (Dorze people)"
                    },
                    {
                        day: "4",
                        description: "Nech Sar Park and Chamo Lake"
                    },
                    {
                        day: "5",
                        description: "Arba Minch – Jinka"
                    },
                    {
                        day: "6",
                        description: "Visit the Mursi people and O/N Mago Park"
                    },
                    {
                        day: "7",
                        description: "Drive to Turmi and visit Karo people"
                    },
                    {
                        day: "8",
                        description: "Murelle –Turmi"
                    },
                    {
                        day: "9",
                        description: "Visit the Hammer people and celebrations at Turmi-market of Turmi or Omorate Galeb People"
                    },
                    {
                        day: "10",
                        description: "Turmi- Konso"
                    },
                    {
                        day: "11",
                        description: "Visit Konso Village O/N Arba Minch"
                    },
                    {
                        day: "12",
                        description: "Visit Awassa"
                    },
                    {
                        day: "13",
                        description: "Drive to Addis Ababa"
                    },
                    {
                        day: "14",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE403",
                name: "Omo Valley Programme: Arba Minch, Mago park, Karo, Turmi, Lake Stephany, Yabelo (16 days)",
                duration: "16",
                program: [
                    {
                        day: "1",
                        description: "Arrival Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Visit Lake Ziway, Shala, Abyatta O/N Langano"
                    },
                    {
                        day: "3",
                        description: "Arbaminch Chencha (Dorze People)"
                    },
                    {
                        day: "4",
                        description: "Nech sar park- Chamo Lake"
                    },
                    {
                        day: "5",
                        description: "Drive to Mago (Tsemay and Bena peoples)"
                    },
                    {
                        day: "6",
                        description: "Visit to Mursi People O/N Mago Park"
                    },
                    {
                        day: "7",
                        description: "Mago- Murelle visit Karo people "
                    },
                    {
                        day: "8",
                        description: "Drive to Omorate and visit Galeb people"
                    },
                    {
                        day: "9",
                        description: "Omorate- Turmi Hammer market and people"
                    },
                    {
                        day: "10",
                        description: "Turmi- Konso"
                    },
                    {
                        day: "11",
                        description: "Konso village- Yabello"
                    },
                    {
                        day: "12",
                        description: "Drive to Elsod for Borena salt extraction and Dublock Singing wells O/N Yabello"
                    },
                    {
                        day: "13",
                        description: "Yabello- Awassa"
                    },
                    {
                        day: "14",
                        description: "Awassa visit fish market."
                    },
                    {
                        day: "15",
                        description: "Addis Ababa"
                    },
                    {
                        day: "16",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE404",
                name: "Omo Valley program- ER 403 + Lake Turkana (17 to 18 days)",
                duration: "17 - 18",
            },
            {
                code: "BNE405",
                name: "Omo Valley ER 403 + Bale park (17 days)",
                duration: "17",
            },
            {
                code: "BNE406",
                name: "Bale Park, Elsod, Arba Minch, Rift Valley Lakes (13 days)",
                duration: "13",
            },
            {
                code: "BNE407",
                name: "Bale Park, Wondogenet forest and Omo Valley (16 days)",
                duration: "16",
                program: [
                    {
                        day: "1",
                        description: "Addis Ababa city tour"
                    },
                    {
                        day: "2",
                        description: "Addis Ababa – Assela – Bale Goba"
                    },
                    {
                        day: "3",
                        description: "Senete plateau and Tulu Dimtu forest"
                    },
                    {
                        day: "4",
                        description: "Bale Goba- Wondo Genet resort and forest"
                    },
                    {
                        day: "5",
                        description: "Drive to Arba Minch Dorze people"
                    },
                    {
                        day: "6",
                        description: "Netch Sar Park and Chamo Lake"
                    },
                    {
                        day: "7",
                        description: "Arba Minch – Mogo, Tsemay and Bena people"
                    },
                    {
                        day: "8",
                        description: "Mursi Village, O/N Mago Park "
                    },
                    {
                        day: "9",
                        description: "Drive to Murelle Karo Village"
                    },
                    {
                        day: "10",
                        description: "Murelle- Turmi"
                    },
                    {
                        day: "11",
                        description: "Turmi- visits the Hammer people celebrations (Wedding during the summer) and market."
                    },
                    {
                        day: "12",
                        description: "Turmi- Lake Stephany- Konso"
                    },
                    {
                        day: "13",
                        description: "Visit Konso villages and O/N Arbaminch"
                    },
                    {
                        day: "14",
                        description: "Visit Lake Shala, Abyatta and O/N Lake Langano"
                    },
                    {
                        day: "15",
                        description: "Langano – Addis Ababa"
                    },
                    {
                        day: "16",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE408",
                name: "Nekemte, Gambella, Tum, Jimma (14 days)",
                duration: "14",
            },
            {
                code: "BNE409",
                name: "Surma Trekking (13 days)",
                duration: "13",
                program: [
                    {
                        day: "1",
                        description: "Arrival Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Flight to Tum- visit of the market of Dizi, Tshema, Surma and Zilmano tribes"
                    },
                    {
                        day: "3",
                        description: "Start of trekking Tum- Maji"
                    },
                    {
                        day: "4",
                        description: "Maji- Adika Dizi tribes"
                    },
                    {
                        day: "5",
                        description: "Go to Kormu: Chai tribe (a clan of Surma)"
                    },
                    {
                        day: "6",
                        description: "Kormu- Kibish Surma people"
                    },
                    {
                        day: "7",
                        description: "Kibish (O/N river bank)"
                    },
                    {
                        day: "8",
                        description: "Kibish- Kormu"
                    },
                    {
                        day: "9",
                        description: "Kormu- Adikas"
                    },
                    {
                        day: "10",
                        description: "Adikas- Tum end of trekking"
                    },
                    {
                        day: "11",
                        description: "Flight to Addis Ababa (or return by car day 12)"
                    },
                    {
                        day: "12",
                        description: "Leisure at Addis Ababa"
                    },
                    {
                        day: "13",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE410",
                name: "Surma Trekking (16 days)",
                duration: "16",
            },
        ]
    },
    {
        id: "5",
        name: "RIFT VALLEY, BALE MOUNTAINS AND THE EASTERN CIRCUIT",
        description: "Discover the stunning landscapes of the Rift Valley, witness the biodiversity of the Bale Mountains, and explore the captivating Eastern Circuits.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE501",
                name: "Bale Park (6 days) ",
                duration: "6",
                program: [
                    {
                        day: "1",
                        description: "Arrival and city tour in Addis Ababa O/N Hotel"
                    },
                    {
                        day: "2",
                        description: "Drive to Bale National park"
                    },
                    {
                        day: "3",
                        description: "Game drive to visit endemic mammals and birds at the Sanete"
                    },
                    {
                        day: "4",
                        description: "Plateau and Tulu Dimtu forest "
                    },
                    {
                        day: "5",
                        description: "Visit of Sof omar cave"
                    },
                    {
                        day: "6",
                        description: "Drive back to Addis Ababa"
                    },
                    {
                        day: "7",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE502",
                name: "Bale Mountain Trekking ( 8 days )",
                duration: "8",
                program: [
                    {
                        day: "1",
                        description: "Arrival and city tour in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Drive to Bale National Park"
                    },
                    {
                        day: "3",
                        description: "Trekking to Morano Mountain (3750 mts)"
                    },
                    {
                        day: "4",
                        description: "Climbing Batu and camping near Gebreguracha Lake"
                    },
                    {
                        day: "5",
                        description: "Hike across the senate plateau and meet vehicles at Goba – Dolo Road."
                    },
                    {
                        day: "6",
                        description: "Goba to Addis Ababa"
                    },
                    {
                        day: "7",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE503",
                name: "Rift valley lakes, Bale and Awash Park (10 days)",
                duration: "10",
                program: [
                    {
                        day: "1",
                        description: "Arrival and city tour in Addis Ababa."
                    },
                    {
                        day: "2",
                        description: "Visit Shala, Abyatta and Langano Lakes"
                    },
                    {
                        day: "3",
                        description: "Visit Wondogent O/N Awassa."
                    },
                    {
                        day: "4",
                        description: "Drive to Bale"
                    },
                    {
                        day: "5",
                        description: "Visit mammals, birds and plants in Bale National Park."
                    },
                    {
                        day: "6",
                        description: "Visit Sof Omar caves"
                    },
                    {
                        day: "7",
                        description: "Drive to Awash Park"
                    },
                    {
                        day: "8",
                        description: "Visit palm spring and Fentale volcanic rim"
                    },
                    {
                        day: "9",
                        description: "Drive to Addis Ababa"
                    },
                    {
                        day: "10",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE504",
                name: "Harar and Dire Dawa ( By air ) ( 5 days)",
                duration: "5",
                program: [
                    {
                        day: "1",
                        description: "Arrival and city tour in Addis Ababa."
                    },
                    {
                        day: "2",
                        description: "Flight to Dire Dawa, city tour and drive to Harar O/N Harar."
                    },
                    {
                        day: "3",
                        description: "Explore Harar"
                    },
                    {
                        day: "4",
                        description: "Drive to Dire Dawa and flight back to Addis Ababa."
                    },
                    {
                        day: "5",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE505",
                name: "Awash, Harar, Dire Dawa (7 days)",
                duration: "7",
            },
            {
                code: "BNE506",
                name: "Denakil Depression, Dire Dawa, Harar and Awash Park with trekking (13 days)",
                duration: "13",
                program: [
                    {
                        day: "1",
                        description: "Addis Ababa city tour "
                    },
                    {
                        day: "2",
                        description: "Drive to Assayta"
                    },
                    {
                        day: "3",
                        description: "Assayta – Serdo"
                    },
                    {
                        day: "4",
                        description: "Drive to Lake Afrera"
                    },
                    {
                        day: "5",
                        description: "Four days to visit the volcano and trekking to Dallol on the back of camels then return back "
                    },
                    {
                        day: "6",
                        description: "Ertale – back to Lake "
                    },
                    {
                        day: "7",
                        description: "Lake Afrera – Assayata"
                    },
                    {
                        day: "8",
                        description: "Assayata- Dire Dawa"
                    },
                    {
                        day: "9",
                        description: "Visit of the city and O/N Harar "
                    },
                    {
                        day: "10",
                        description: "Visit of Harar and drive to Awash Park"
                    },
                    {
                        day: "11",
                        description: "Visit of the park"
                    },
                    {
                        day: "12",
                        description: "Drive back to Addis Ababa"
                    },
                    {
                        day: "13",
                        description: "Departure"
                    },
                ],
            },
        ],
    },
    {
        id: "6",
        name: "BIRD WATCHING",
        description: "Ethiopia is a paradise for bird enthusiasts, offering a wide variety of endemic and migratory bird species. Explore designated bird watching routes and witness the country's avian wonders.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE601",
                name: "Menagesha, Debre Libanos, Awash, Rift Valley Lakes, Wondogenet, Bale Park (By Car) (16 days)",
                duration: "16",
                program: [
                    {
                        day: "1",
                        description: "Arrival at Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Addis Ababa – Menagesha forest- Addis Ababa: Winged goose, black headed Siskin etc"
                    },
                    {
                        day: "3",
                        description: "Addis Ababa – Debre Libanos monastery- Addis Ababa:Abyssinian long claw, Lappet faced Vultures, etc. "
                    },
                    {
                        day: "4",
                        description: "Addis Ababa – Debre Zeit Crater Lakes- Awash Park 4003 species of birds have"
                    },
                    {
                        day: "5",
                        description: "Awash Park (two days) been recorded here."
                    },
                    {
                        day: "6",
                        description: "Awash – Langano (two days): Herons, Knob-billed "
                    },
                    {
                        day: "7",
                        description: "Geese, Marabou stroks etc."
                    },
                    {
                        day: "8",
                        description: "Langano – Awassa Marabous, Pred King Fishers, Ducks, geese, etc"
                    },
                    {
                        day: "9",
                        description: "Wondo Genet – Bale National Park."
                    },
                    {
                        day: "10",
                        description: "Bale Park (Day two days 13& Day14) Seventeen endemic Birds are recorded here Rovgets Rail Wattled Crane, Abyssinian Lung claw, Lammergeyer, etc. "
                    },
                    {
                        day: "11",
                        description: "Drive to Addis Ababa through Assela,"
                    },
                    {
                        day: "12",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE602",
                name: "ER 601 + Bahir Dar with Lake Tana (By Air and Surface) (20 days)",
                duration: "20",
            },
            {
                code: "BNE603",
                name: "Around Addis Ababa (3 days) (By car)",
                duration: "3",
                program: [
                    {
                        day: "1",
                        description: "Arrival Addis Ababa – Gefferssa Reservoir (200 r30 kms west of Addis): The Blue winged Goose, Black-headed Siskin, Abyssinian Long Claw and Wattled Ibis, etc "
                    },
                    {
                        day: "2",
                        description: "Addis Ababa – Sululta- Debre Libanos (about 110 kms)"
                    },
                    {
                        day: "3",
                        description: "Drive to Suba or Menagesha Forest (50 kms) then Addis"
                    },
                ],
            },
            {
                code: "BNE604",
                name: "Debre Zeit and Awash National Park (4 days)",
                duration: "6",
                program: [
                    {
                        day: "1",
                        description: "Arrival Addis Ababa then drive to Debre Zeit (50 kms) Spur – Winged Plover, Red Knobbed Coot, Spur etc"
                    },
                    {
                        day: "2",
                        description: "Drive to Awash National Park four hundred species of birds have been recorded including Abyssinian Roller, Abyssinian Ground Horn Bill White tailed swallow Buff Crested Bustard, Dark Chanting, Goshwak, Pygmy Falcon, Honey guide, Wood lan king fisher, etc. "
                    },
                    {
                        day: "3",
                        description: "Full day birding in the game park including visit to hot springs"
                    },
                    {
                        day: "4",
                        description: "Drive back to Addis "
                    },
                ],
            },
        ]
    },
    {
        id: "7",
        name: "PHOTOGRAPHY EXPEDITIONS",
        description: "Capture the beauty of Ethiopia through your lens with dedicated photography tours, allowing you to document the country's landscapes, wildlife, and cultural treasures.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE701",
                name: "Omo Valley 9 days",
                duration: "9",
                program: [
                    {
                        day: "1",
                        description: "Arrival at Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Fly Jinka"
                    },
                    {
                        day: "3",
                        description: "Excursion to Mursi & Jinka market"
                    },
                    {
                        day: "4",
                        description: "Drive to Turmi via Key Afer"
                    },
                    {
                        day: "5",
                        description: "Excursion to Korcho"
                    },
                    {
                        day: "6",
                        description: "Excursion to Omorate"
                    },
                    {
                        day: "7",
                        description: "Drive to Arba Minch via  Konso Villages "
                    },
                    {
                        day: "8",
                        description: "Fly to Addis Ababa "
                    },
                    {
                        day: "9",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE702",
                name: "HISTORIC ETHIOPIA and DJIBOUTI (24 DAYS, 23 NIGHTS)",
                duration: "16",
                program: [
                    {
                        day: "1",
                        description: "Arrival at Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Fly to Gonder, & drive to the Simien Mountains National Park"
                    },
                    {
                        day: "3",
                        description: "Explore the Simien."
                    },
                    {
                        day: "4",
                        description: "Drive to Gonder & visit the sightseeing"
                    },
                    {
                        day: "5",
                        description: "Fly to Lalibela & visit the rock hewn churches. "
                    },
                    {
                        day: "6",
                        description: "Explore more rock churches in & around Lalibela"
                    },
                    {
                        day: "7",
                        description: "Fly to Axum & city tour then drive to Gherlta area. "
                    },
                    {
                        day: "8",
                        description: "Explore the Tigray rock churches"
                    },
                    {
                        day: "9",
                        description: "Drive to the Danakil Depression and sunset over Lake Assale"
                    },
                    {
                        day: "10",
                        description: "Explore the Dallol area & salt mine"
                    },
                    {
                        day: "11",
                        description: "More exploration in Danakil area and drive to Mekelle"
                    },
                    {
                        day: "12",
                        description: "Fly to Addis & Departure"
                    },
                ],
            },
            {
                code: "BNE703",
                name: "EASTERN ROUTE (19 DAYS, 18 NIGHTS)",
                duration: "19",
                program: [
                    {
                        day: "1",
                        description: "Arrive in Addis Ababa, O/N htl."
                    },
                    {
                        day: "2",
                        description: "Drive Kombolcha if the day is Sunday visit the Senbete Market on the way to Kombolcha. O/N hlt."
                    },
                    {
                        day: "3",
                        description: "Drive to Afar people if it is Monday Bati market. O/N camping at Mile."
                    },
                    {
                        day: "4",
                        description: "Drive to Danakil depression. O/N camping."
                    },
                    {
                        day: "5",
                        description: "Drive to Lake Afrera. O/N camping."
                    },
                    {
                        day: "6",
                        description: "Visit the active volcanic area in Ertale region. O/N camping"
                    },
                    {
                        day: "7",
                        description: "Climb the Active volcanic area for the unique panoramic view. O/N camping."
                    },
                    {
                        day: "8",
                        description: "Back to the vehicles. O/N camping"
                    },
                    {
                        day: "9",
                        description: "Drive to Semera. O/N camping"
                    },
                    {
                        day: "10",
                        description: "Drive to Dire Dawa."
                    },
                    {
                        day: "11",
                        description: "Drive to Harar to visit the old town, the 4th Moslem city, typical Adere house and in the evening the Hyena man show. O/N htl."
                    },
                    {
                        day: "12",
                        description: "Drive to Awash National Park for Awash River fall and wild life as well as bird life. O/N camping or local htl."
                    },
                    {
                        day: "13",
                        description: "Visit the palm side hot spring and the Kereyu people. O/N htl."
                    },
                    {
                        day: "14",
                        description: "Back to Addis Ababa via Metehara lake and Nazareth. O/N htl."
                    },
                    {
                        day: "15",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE704",
                name: "DJIBOUTI REPUBLIC (8 NIGHTS, 7 DAYS)",
                duration: "7",
                program: [
                    {
                        day: "1",
                        description: "Arrive to Djibouti. O/N htl."
                    },
                    {
                        day: "2",
                        description: "Drive to Lake Easal for the view. O/N camping."
                    },
                    {
                        day: "3",
                        description: "Drive to Tajura, the old capital of the Issa people. O/N htl."
                    },
                    {
                        day: "4",
                        description: "Boat trip and diving. O/N on the boat."
                    },
                    {
                        day: "5",
                        description: "Proceed to Djibouti. O/N htl."
                    },
                    {
                        day: "6",
                        description: "Excursion to Lake Abe. O/N htl."
                    },
                    {
                        day: "7",
                        description: "Back Djibouti town. O/N htl."
                    },
                    {
                        day: "8",
                        description: "Fly to Addis or drive to another country"
                    },
                ],
            },
            {
                code: "BNE705",
                name: "OMO VALLEY, BALE MOUNTAIN, HARAR, and DJIBUTI (24 DAYS)",
                duration: "24",
                program: [
                    {
                        day: "1",
                        description: "Arrive in Addis Ababa."
                    },
                    {
                        day: "2",
                        description: "Drive Abyata, Shala and Langano. O/N htl."
                    },
                    {
                        day: "3",
                        description: "Drive to Arba Minch via Wolaita and Chencha (Dorze people). O/N htl."
                    },
                    {
                        day: "4",
                        description: "Nechisar National Park and Chamo Lake. O/N htl."
                    },
                    {
                        day: "5",
                        description: "Drive Arba Minch-Jinka on the way see Tsemay, Ari, Benna people. O/N Jinka"
                    },
                    {
                        day: "6",
                        description: "Drive Arba Minch-Jinka on the way see Tsemay, Ari, Benna people. O/N Jinka."
                    },
                    {
                        day: "7",
                        description: "Drive to Murulle to visit the Karo people & villages. O/N camp Murulle or Duss."
                    },
                    {
                        day: "8",
                        description: "Visit Bume people & O/N Turmi at Hammer people village (camp or lodge)."
                    },
                    {
                        day: "9",
                        description: "Excursion trip to Omorate to visit Dassanech people. O/N camping or in Tented lodge at Turmi."
                    },
                    {
                        day: "10",
                        description: "Visit the Hammer people, colorful markets at Dimeka or Turmi (depend on days, Hammer people dances and possible their marriage ceremonies (with the jumping bull). O/N camping or in fixed tent in Turmi."
                    },
                    {
                        day: "11",
                        description: "Drive to Konso people visiting Erbore people and the Konso village. O/N local htl or camping."
                    },
                    {
                        day: "12",
                        description: "Visit Konso village and drive to Arba Minch. O/N htl."
                    },
                    {
                        day: "13",
                        description: "Drive to Awasa & Wondogenet. O/N htl."
                    },
                    {
                        day: "14",
                        description: "Drive to Bale then visit Bale mountains National Park as the locals call it ‘Dinsho’. O/N Dinsho lodge or htl in Goba."
                    },
                    {
                        day: "15",
                        description: "Drive to Senate plateau and Harena escarpment. O/N htl in Goba."
                    },
                    {
                        day: "16",
                        description: "Drive to Awash National Park. O/N htl or camping."
                    },
                    {
                        day: "17",
                        description: "Full day Game drive and visit the hot spring. O/N hotel or camping."
                    },
                    {
                        day: "18",
                        description: "Drive to Harar. O/N htl."
                    },
                    {
                        day: "19",
                        description: "Full day city tour in Harar then proceed to Dire-Dawa O/N htl."
                    },
                    {
                        day: "20",
                        description: "Drive to Djibouti through Dewelle. O/N htl in Djibouti."
                    },
                    {
                        day: "21",
                        description: "Drive to Lake Asal and Tajura. O/N htl."
                    },
                    {
                        day: "22",
                        description: "Boat drive for one day on the sea with diving. O/N on the boat or back to hotel."
                    },
                    {
                        day: "23",
                        description: "Leisure time on the beach side. O/N htl."
                    },
                    {
                        day: "24",
                        description: "Fly back to Addis and connect for the flight to your home country."
                    },
                ],
            },
        ]
    },
    {
        id: "8",
        name: "RELIGIOUS FESTIVALS OR FIXED SCHEDULES",
        description: "Experience the vibrancy and cultural richness of Ethiopian festivals, where music, dance, and ancient traditions come together in colorful celebrations.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE801",
                name: "Genna (Ethiopian Christmas) 10 nights/11 days (by air and car)",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Jan 03: Arrive in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Jan 04: Fly to Bahir Dar"
                    },
                    {
                        day: "3",
                        description: "Jan 05: Fly to Gondar "
                    },
                    {
                        day: "4",
                        description: "Jan 06:- In Gondar – excursion to Simien"
                    },
                    {
                        day: "5",
                        description: "Jan 07:- Fly to Lalibela (Ethiopian Christmas Eve Day Celebration)"
                    },
                    {
                        day: "6",
                        description: "Jan 08:- In Lalibela (Christmas Day Celebration) "
                    },
                    {
                        day: "7",
                        description: "Jan 09:- Fly to Axum"
                    },
                    {
                        day: "8",
                        description: "Jan 10:- Fly to Addis Ababa – City tour"
                    },
                    {
                        day: "9",
                        description: "Jan11:- Fly to Dire Dawa drive to Harar"
                    },
                    {
                        day: "10",
                        description: "Jan12:- Drive to Dire Dawa, Fly to Addis"
                    },
                    {
                        day: "11",
                        description: "Jan13:- Departure"
                    },
                ],
            },
            {
                code: "BNE802",
                name: "Timiket (Ethiopian Epiphany) 10 nights /11 days Timiket in Addis",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Jan 11: Arrival in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Jan 12: Fly to Axum"
                    },
                    {
                        day: "3",
                        description: "Jan 13: Fly to Lalibela "
                    },
                    {
                        day: "4",
                        description: "Jan 14: In Lalibela"
                    },
                    {
                        day: "5",
                        description: "Jan 15: Fly to Gondar"
                    },
                    {
                        day: "6",
                        description: "Jan 16: Fly to Bahar Dar "
                    },
                    {
                        day: "7",
                        description: "Jan 17: Fly to Addis"
                    },
                    {
                        day: "8",
                        description: "Jan 18: Fly to Dire Dawa drive to Harar"
                    },
                    {
                        day: "9",
                        description: "Jan 19: Fly to Drive to Dire Dawa Fly to Dire Dawa"
                    },
                    {
                        day: "10",
                        description: "Jan 20: In Addis (Timket Day)"
                    },
                    {
                        day: "11",
                        description: "Jan 21: Departure"
                    },
                ],
            },
            {
                code: "BNE803",
                name: "Timiket in Axum",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Jan 17: Arrive in Addis"
                    },
                    {
                        day: "2",
                        description: "Jan 18: Fly to Bahir Dar"
                    },
                    {
                        day: "3",
                        description: "Jan 19: Fly to Axum (Timket Eve)"
                    },
                    {
                        day: "4",
                        description: "Jan 20: In Axum (Timket day)"
                    },
                    {
                        day: "5",
                        description: "Jan 21: Fly to Lalibella"
                    },
                    {
                        day: "6",
                        description: "Jan 22: Fly to Gondar"
                    },
                    {
                        day: "7",
                        description: "Jan 23: In Gondar"
                    },
                    {
                        day: "8",
                        description: "Jan 24: Fly to Addis City toor"
                    },
                    {
                        day: "9",
                        description: "Jan25: Fly to Dire Dawa drive to Harar"
                    },
                    {
                        day: "10",
                        description: "Jan26: Drive to Dire Dawa, fly to Addis"
                    },
                    {
                        day: "11",
                        description: "Jan27: Departure"
                    },
                ],
            },
            {
                code: "BNE804",
                name: "Timiket in Gondar ",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Jan 17: Arrival in Addis"
                    },
                    {
                        day: "2",
                        description: "Jan 18: fly to Bahir Dar "
                    },
                    {
                        day: "3",
                        description: "Jan 19: fly to Gondar"
                    },
                    {
                        day: "4",
                        description: "Jan 20: In Gondar (Timket Day)"
                    },
                    {
                        day: "5",
                        description: "Jan 21: Fly to Lalibela"
                    },
                    {
                        day: "6",
                        description: "Jan 22: In Lalibela"
                    },
                    {
                        day: "7",
                        description: "Jan 23: Fly to Axum"
                    },
                    {
                        day: "8",
                        description: "Jan 24: Fly to Addis"
                    },
                    {
                        day: "9",
                        description: "Jan 25: Fly to Dire Dawa drive to Harar"
                    },
                    {
                        day: "10",
                        description: "Jan 26: Drive to Dire Dawa, Fly to Addis"
                    },
                    {
                        day: "11",
                        description: "Jan27: Departure"
                    },
                ],
            },
            {
                code: "BNE805",
                name: "Timiket in Lalibela",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Jan17: Arrive in Addis"
                    },
                    {
                        day: "2",
                        description: "Jan18: Fly to Axum"
                    },
                    {
                        day: "3",
                        description: "Jan 19: Fly to Lalibela"
                    },
                    {
                        day: "4",
                        description: "Jan 20: In Lalibela (Timket Day)"
                    },
                    {
                        day: "5",
                        description: "Jan 21: Fly to Gondar"
                    },
                    {
                        day: "6",
                        description: "Jan 22: In Gondar"
                    },
                    {
                        day: "7",
                        description: "Jan23: Fly to Bahir Dar"
                    },
                    {
                        day: "8",
                        description: "Jan 24: Fly to Addis"
                    },
                    {
                        day: "9",
                        description: "Jan 25: Fly to Dire Dawa drive to Harar"
                    },
                    {
                        day: "10",
                        description: "Jan 26: Drive to Dire Dawa fly to Addis"
                    },
                    {
                        day: "11",
                        description: "Jan 27: Departure"
                    },
                ],
            },
            {
                code: "BNE806",
                name: "Fasika- (Ethiopian Easter)Ancient Easter Festivals in Ethiopia",
                duration: "14",
                program: [
                    {
                        day: "1",
                        description: "March 17: Arrive in Addis Ababa o/n ht1"
                    },
                    {
                        day: "2",
                        description: "March 18: Fly to Axum O/N ht1"
                    },
                    {
                        day: "3",
                        description: "March 19: Drive to visit Yeha Temple O/N htl"
                    },
                    {
                        day: "4",
                        description: "April 20: Palm Sunday Celebrations Semien National park"
                    },
                    {
                        day: "5",
                        description: "April 21: Drive to Sankaber, Semien National park"
                    },
                    {
                        day: "6",
                        description: "April 22: Hike in Simien Mountain National Park afternoon drive to Gondar."
                    },
                    {
                        day: "7",
                        description: "April 23: Visit Gondar drive to Bahir Dar"
                    },
                    {
                        day: "8",
                        description: "April 24: Visit Tisisat Falls and Boat trip on Lake Tana"
                    },
                    {
                        day: "9",
                        description: "April 25: Fly Lalibela Visit Naakkutolab Monastery"
                    },
                    {
                        day: "10",
                        description: "April26: Visit Rock cut churches Witness Easter vigil"
                    },
                    {
                        day: "11",
                        description: "April27: Easter in Lalibela Mule Trek in the Lalibela Mountains"
                    },
                    {
                        day: "12",
                        description: "April 28: Fly to Addis Ababa City tour"
                    },
                    {
                        day: "13",
                        description: "April 29: Drive to Debre Zeyit crater lakes o/n Addis Ababa"
                    },
                    {
                        day: "14",
                        description: "April 30: Departure"
                    },
                ],
            },
            {
                code: "BNE807",
                name: "Fasika – (Ethiopian Easter) Ancient Easter Festival in Axum",
                duration: "14",
                program: [
                    {
                        day: "1",
                        description: "April 24: Arrival in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "April 25: Fly to Axum"
                    },
                    {
                        day: "3",
                        description: "April 26: Drive to visit Yeha Temple o/n h+1"
                    },
                    {
                        day: "4",
                        description: "April 27: Easter in Axum Church of Saint Mary of Zion"
                    },
                    {
                        day: "5",
                        description: "April 28: Fly to Lalibela visit Naakkutolab Monastery"
                    },
                    {
                        day: "6",
                        description: "April 29 Visit Rock carved churches"
                    },
                    {
                        day: "7",
                        description: "April 30: Fly to the Royal City of Gondar"
                    },
                    {
                        day: "8",
                        description: "May1: Drive to Bahir Dar visit Tisisat falls and Boat trip on Lake Tana"
                    },
                    {
                        day: "9",
                        description: "May2: Fly to Addis Ababa"
                    },
                    {
                        day: "10",
                        description: "May3: Drive towards the Rift valley lakes visit Melka Kunture –one of the most important Paleolithic sites in Ethiopia, Continue to the church of Adadi Mariam o/n Langano "
                    },
                    {
                        day: "11",
                        description: "May4: Drive to Awassa visit fish market and Awassa Lake.O\Nhtl."
                    },
                    {
                        day: "12",
                        description: "May5: Drive to Wondogenet O/N htl "
                    },
                    {
                        day: "13",
                        description: "May6: Drive to Addis Ababa – City tour, visit some souvenir Shops. O/N htl"
                    },
                    {
                        day: "14",
                        description: "May7: Departure"
                    },
                ],
            },
            {
                code: "BNE808",
                name: "Fasika - (Ethiopia Easter)Ancient Easter Celebration in Axum",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "April 24: Arrive in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "April 25: Fly to Lalibela (Good Friday)"
                    },
                    {
                        day: "3",
                        description: "April 26: Fly to Axum (Easter Eve Celebration)"
                    },
                    {
                        day: "4",
                        description: "April 27: Easter in Axum, Church of Saint Mary of Zion"
                    },
                    {
                        day: "5",
                        description: "April 28: Fly to Gondar"
                    },
                    {
                        day: "6",
                        description: "April 29: In Gondar- excursion to simian"
                    },
                    {
                        day: "7",
                        description: "April 30: Fly to Bahir Dar, Visit Tisisal Falls and Boat trip on Lake Tana "
                    },
                    {
                        day: "8",
                        description: "May1: Fly to Addis"
                    },
                    {
                        day: "9",
                        description: "May2: Fly to Dire Dawa drive to Harar"
                    },
                    {
                        day: "10",
                        description: "May3: Drive to Dire Dawa Fly to Addis – City tour, visit souvenir shops "
                    },
                    {
                        day: "11",
                        description: "May4: Departure"
                    },
                ],
            },
            {
                code: "BNE809",
                name: "Hidar Zion – (Celebration of St.Mary)",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Arrive in Addis O/N htl"
                    },
                    {
                        day: "2",
                        description: "Fly to Bahir Dar after noon boat trip on Lake Tana or visit the Blue Nile fall then come back to hotel for most enjoyable sun set O/N Htl"
                    },
                    {
                        day: "3",
                        description: "Fly to Axum (Processions begin) O/N Htl"
                    },
                    {
                        day: "4",
                        description: "In Axum (celebration of St.Mary) O/N Htl"
                    },
                    {
                        day: "5",
                        description: "Fly to Lalibela O/N Htl"
                    },
                    {
                        day: "6",
                        description: "In Lalibela O/N Htl"
                    },
                    {
                        day: "7",
                        description: "Fly to Gondar O/N Htl"
                    },
                    {
                        day: "8",
                        description: "Fly to Addis Ababa O/N Htl"
                    },
                    {
                        day: "9",
                        description: "Fly to Dire Dawa, drive to Harar O/N Htl"
                    },
                    {
                        day: "10",
                        description: "Drive to Dire Dawa fly to Addis O/N Htl "
                    },
                    {
                        day: "11",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE810",
                name: "Hidar Zion (10 nights/11 days)",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Arrive in Addis O/N Htl"
                    },
                    {
                        day: "2",
                        description: "Fly to Axum (Processions begin) O/N Htl"
                    },
                    {
                        day: "3",
                        description: "In Axum (celebration of St.Mary O/N Htl"
                    },
                    {
                        day: "4",
                        description: "Fly to Lalibela O/N Htl"
                    },
                    {
                        day: "5",
                        description: "In Lalibela O/N Htl"
                    },
                    {
                        day: "6",
                        description: "Fly to Gondar O/N Htl"
                    },
                    {
                        day: "7",
                        description: "Fly to Bahir Dar O/N Htl"
                    },
                    {
                        day: "8",
                        description: "Fly to Addis Ababa O/N Htl"
                    },
                    {
                        day: "9",
                        description: "Fly to Dire Dawa, drive to Harar O/N Htl"
                    },
                    {
                        day: "10",
                        description: "Drive to Dire Dawa, fly to Addis O/N Htl "
                    },
                    {
                        day: "11",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE811",
                name: "Meskel (Finding the True Cross of Christ In Addis) (10 nights/ 11 days) ",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Sep27: Arrive in Addis O/N Htl"
                    },
                    {
                        day: "2",
                        description: "Sep 28: In Addis (Meskel Day Procession) O/N Htl"
                    },
                    {
                        day: "3",
                        description: "Sep 29: Fly to Axum O/N Htl"
                    },
                    {
                        day: "4",
                        description: "Sep 30: Fly to Lalibela O/N Htl"
                    },
                    {
                        day: "5",
                        description: "Oct 1: In Lalibela O/N Htl"
                    },
                    {
                        day: "6",
                        description: "Oct 2: Fly to Gondar O/N Htl"
                    },
                    {
                        day: "7",
                        description: "Oct 3: Fly to Bahir Dar O/N Htl"
                    },
                    {
                        day: "8",
                        description: "Oct 4: Fly to Addis Ababa O/N Htl"
                    },
                    {
                        day: "9",
                        description: "Oct 5: Fly to Dire Dawa drive to Harar O/N Htl"
                    },
                    {
                        day: "10",
                        description: "Oct 6: Drive to Dawa, fly to Addis O/N Htl "
                    },
                    {
                        day: "11",
                        description: "Oct 7: Departure"
                    },
                ],
            },
            {
                code: "BNE812",
                name: "Meskel (Finding the True Cross of Christ in Axum)(10 nights/ 1 days)",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Sep 27: Arrive in Addis O/N Htl"
                    },
                    {
                        day: "2",
                        description: "Sep 28: In Addis (Meskel Day Procession) O/N Htl"
                    },
                    {
                        day: "3",
                        description: "Sep 29: Fly to Axum O/N Htl"
                    },
                    {
                        day: "4",
                        description: "Sep 30: Fly to Lalibela O/N Htl"
                    },
                    {
                        day: "5",
                        description: "Oct 1: In Lalibela O/N Htl"
                    },
                    {
                        day: "6",
                        description: "Oct 2: Fly to Gondar O/N Htl"
                    },
                    {
                        day: "7",
                        description: "Oct 3: Fly to Bahir Dar O/N Htl"
                    },
                    {
                        day: "8",
                        description: "Oct 4: Fly to Addis Ababa O/N Htl"
                    },
                    {
                        day: "9",
                        description: "Oct 5: Arbaminch O/N Htl"
                    },
                    {
                        day: "10",
                        description: "Oct 6: In Arbaminch O/N Htl "
                    },
                    {
                        day: "11",
                        description: "Oct 7: Drive to Addis O/N Htl"
                    },
                    {
                        day: "12",
                        description: "Oct 8: Departure"
                    },
                ],
            },
            {
                code: "BNE813",
                name: "Gishen Mariam – (Feast of Piece of the Cross)(10 nights/11 days)",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "September 29: Arrive in Addis O/N Htl"
                    },
                    {
                        day: "2",
                        description: "September 30: Fly Bahir Dar O/N Htl"
                    },
                    {
                        day: "3",
                        description: "October 1: Fly to Axum (Processions begin) O/N Htl"
                    },
                    {
                        day: "4",
                        description: "October 2:In Axum (Celebration of St. Mary) O/N Htl"
                    },
                    {
                        day: "5",
                        description: "October 3: Fly to Lalibela O/N Htl"
                    },
                    {
                        day: "6",
                        description: "October 4: In Lalibela O/N Htl"
                    },
                    {
                        day: "7",
                        description: "October 5: Fly to Gondar O/N Htl"
                    },
                    {
                        day: "8",
                        description: "October 6: Fly to Addis O/N Htl"
                    },
                    {
                        day: "9",
                        description: "October 7: Fly to Dire Dawa; drive to Harar O/N Htl"
                    },
                    {
                        day: "10",
                        description: "October 8: Drive to Dire Dawa; fly to Addis O/N Htl"
                    },
                    {
                        day: "11",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE814",
                name: "Kulubi Gabriel (Feast of St Gabriel, 29 December)",
                duration: "1",
                program: [
                    {
                        day: "1",
                        description: "St Gabriel is the Patron Saint who guards over homes and churches. There is a huge pilgrimage to St Gabriel's Church on Kulubi hill, which is on the route from Addis Ababa eastwards, about 70 kilometers before Dire Dawa. Many pilgrims carry heavy burdens as penance, children are brought to be baptized, and offerings are made to be distributed to the poor."
                    },
                ],
            },
            {
                code: "BNE815",
                name: "Sheikh Hussein – (An Islamic Pilgrimage)=(contact us for detail itinerary)",
                duration: "1",
            },
            {
                code: "BNE816",
                name: "Great Ethiopian Run =(contact us for detail itinerary) ",
                duration: "1",
            },
        ]
    },
    {
        id: "9",
        name: "COFFEE TOURS",
        description: "Delve into the origins of coffee in Ethiopia, visiting coffee plantations, participating in traditional coffee ceremonies, and learning about the country's deep coffee culture.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE901",
                name: "Jimma Coffee Tour & Historic Route 11 Days/10 Nights",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Arrival in Addis Ababa"
                    },
                    {
                        day: "2",
                        description: "Addis – Jimma. Overnight stay in a Hotel"
                    },
                    {
                        day: "3",
                        description: "Jimma. Drive to the place where the coffee forest is found 255km far from Jimma"
                    },
                    {
                        day: "4",
                        description: "Jimma – Addis. Overnight stay in the hotel"
                    },
                    {
                        day: "5",
                        description: "Addis Ababa – Bahir Dar (50min)"
                    },
                    {
                        day: "6",
                        description: "Bahir Dar"
                    },
                    {
                        day: "7",
                        description: "Gondar – NP of the Simien Mountains (100 km) – Gondar"
                    },
                    {
                        day: "8",
                        description: "Gondar – Axum"
                    },
                    {
                        day: "9",
                        description: "Axum – Lalibela"
                    },
                    {
                        day: "10",
                        description: "Excursion to Asheton Mariam"
                    },
                    {
                        day: "11",
                        description: "Lalibela – Addis Ababa in the evening, departure"
                    },
                ],
            },
            {
                code: "BNE902",
                name: "EAST ETHIOPIA Coffee10 days/ 9 nights(By Car)",
                duration: "10",
                program: [
                    {
                        day: "1",
                        description: "Arrival in Addis Ababa. O/n in a hotel of optional*"
                    },
                    {
                        day: "2",
                        description: "Addis Ababa"
                    },
                    {
                        day: "3",
                        description: "Addis Ababa – Goba"
                    },
                    {
                        day: "4",
                        description: "Goba – Dollomena – Goba"
                    },
                    {
                        day: "5",
                        description: "Goba – Yirga Alem"
                    },
                    {
                        day: "6",
                        description: "Yirga Alem. O/n in a hotel"
                    },
                    {
                        day: "7",
                        description: "Yirga Alem – Golocha. Overnight stay in a hotel"
                    },
                    {
                        day: "8",
                        description: "Excursion to Golocha Garden Coffee"
                    },
                    {
                        day: "9",
                        description: "Langano"
                    },
                    {
                        day: "10",
                        description: "Departure"
                    },
                ],
            },
        ]
    },
    {
        id: "10",
        name: "BLENDING ADVENTURES",
        description: "Combine various activities and destinations to create a unique blend of adventure and exploration, tailored precisely to your preferences.",
        image: "https://picsum.photos/600/400",
        tours: [
            {
                code: "BNE1001",
                name: "Extension program to Tigray Churches 5 days/6 nights",
                duration: "6",
                program: [
                    {
                        day: "1",
                        description: "Arrive to Addis"
                    },
                    {
                        day: "2",
                        description: "Axum – Adigrat Visit he ancient temple of Yeha from the 5thcentury and the amazing monastery of Debre Damo"
                    },
                    {
                        day: "3",
                        description: "Adigrat –Awzien Visit The Negashi and Teka Tsfay rock churches, Mediahnialem (Holy savior), St Peter church and Michael Milihanzgi."
                    },
                    {
                        day: "4",
                        description: "Awzien - Mekelle Visit the Geralta churches, Abraha Weastbeha, Debretsion AbuneAbraham and Selasie Dugman "
                    },
                    {
                        day: "5",
                        description: "Visit the Michael Barka, Michael Imba and DebReselam and head to Wikro churches. O/n in Mekelle."
                    },
                    {
                        day: "6",
                        description: "Fly to Addis-City tour"
                    },
                ],
            },
            {
                code: "BNE1002",
                name: "Denakil Depression & Harar 12 days/11 nights",
                duration: "11",
                program: [
                    {
                        day: "1",
                        description: "Arrival to Addis"
                    },
                    {
                        day: "2",
                        description: "Addis – Kombolcha "
                    },
                    {
                        day: "3",
                        description: "Kombolcha – Lake Afdiera"
                    },
                    {
                        day: "4",
                        description: "Trekking to the lake "
                    },
                    {
                        day: "5",
                        description: "Lake Afdiera – Geysers of Alalobet "
                    },
                    {
                        day: "6",
                        description: "Alalobet – Asaita, Afar Tribes "
                    },
                    {
                        day: "7",
                        description: "Asaita – Lake Tours "
                    },
                    {
                        day: "8",
                        description: "Asaita – Dire Dawa – Harar "
                    },
                    {
                        day: "9",
                        description: "Harar. City Tour Day 10- Harar- Awash National park"
                    },
                    {
                        day: "10",
                        description: "Awash National Park- Addis "
                    },
                    {
                        day: "11",
                        description: "City Tour of Addis/ Departure"
                    },
                ],
            },
            {
                code: "BNE1003",
                name: "Volcano Erta Ale 8 days/7 nights",
                duration: "8",
                program: [
                    {
                        day: "1",
                        description: "Arrival to Addis"
                    },
                    {
                        day: "2",
                        description: "Addis – Kombolcha "
                    },
                    {
                        day: "3",
                        description: "Kombolcha – Dodom "
                    },
                    {
                        day: "4",
                        description: "Lake Afdiera"
                    },
                    {
                        day: "5",
                        description: "Camel trek to Erta Ale Volcano"
                    },
                    {
                        day: "6",
                        description: "Lake Afdiera- Dodom"
                    },
                    {
                        day: "7",
                        description: "Dodom – Kombolcha "
                    },
                    {
                        day: "8",
                        description: "Kombolcha – Addis"
                    },
                ],
            },
            {
                code: "BNE1004",
                name: "Danakil Depression /Awash National Park 9 Days/8 nights",
                duration: "9",
                program: [
                    {
                        day: "1",
                        description: "Arrival to Addis. O/n in a hotel of optional "
                    },
                    {
                        day: "2",
                        description: "Addis – Awash National Park. O/n in a Lodge"
                    },
                    {
                        day: "3",
                        description: "In Awash National Park"
                    },
                    {
                        day: "4",
                        description: "Awash – Asyata. We visit the Afar people. O/n in a small hotel "
                    },
                    {
                        day: "5",
                        description: "Asyata – Serdo –Lake Afdiera. O/n Camping"
                    },
                    {
                        day: "6",
                        description: "Trek to visit the lake. O/n camping"
                    },
                    {
                        day: "7",
                        description: "Drive to Lake Afdiera – Serdo - Asayta"
                    },
                    {
                        day: "8",
                        description: "Asayta – Awash "
                    },
                    {
                        day: "9",
                        description: "Awash* – Addis * From Awash, it’s possible to extend to Harar, Dire Dawa, Bale Mountains, Rift Valley Lakes and the Omo Valley.  "
                    },
                ],
            },
            {
                code: "BNE1005",
                name: "Tigray Churches and Ertale 21 days/20 nights ",
                duration: "20",
                program: [
                    {
                        day: "1",
                        description: "Arrival to Addis "
                    },
                    {
                        day: "2",
                        description: "Drive from Addis to Kombolcha"
                    },
                    {
                        day: "3",
                        description: "Drive from Kombolch to Lalibela Day 4 -In Lalibela "
                    },
                    {
                        day: "4",
                        description: "Drive Lalibela to Mekelle "
                    },
                    {
                        day: "5",
                        description: "In Dallol"
                    },
                    {
                        day: "6",
                        description: "In Dallol camp"
                    },
                    {
                        day: "7",
                        description: "Drive to Tigray Churches"
                    },
                    {
                        day: "8",
                        description: "In Tigray churches"
                    },
                    {
                        day: "9",
                        description: "Drive from Tigray to Kombolcha"
                    },
                    {
                        day: "10",
                        description: "Drive from Kombolcha to Bati Mile "
                    },
                    {
                        day: "11",
                        description: "Drive from Bati Mile to Semera "
                    },
                    {
                        day: "12",
                        description: "Drive from Semera to Lake Afrera "
                    },
                    {
                        day: "13",
                        description: "Visit Lake Afrera"
                    },
                    {
                        day: "14",
                        description: "Visit Ertale volcano "
                    },
                    {
                        day: "15",
                        description: "In Afrera "
                    },
                    {
                        day: "16",
                        description: "In Semera "
                    },
                    {
                        day: "17",
                        description: "Afar people Awash "
                    },
                    {
                        day: "18",
                        description: "Drive to Awash National Park"
                    },
                    {
                        day: "19",
                        description: "Drive from Awash to Addis "
                    },
                    {
                        day: "20",
                        description: "Departure"
                    },
                ],
            },
            {
                code: "BNE1006",
                name: "Program to Ethiopia's Rift Valley Lakes, Bale Mountains, Omo Valley, Historical North, Simien Mountains & Harar days 23",
                duration: "23",
                program: [
                    {
                        day: "1",
                        description: "Arrive in Addis; city tour and souvenir shopping"
                    },
                    {
                        day: "2",
                        description: "Drive to the Rift Valley & Bale Mountains range; to Goba"
                    },
                    {
                        day: "3",
                        description: "Drive to the Sanetti Plateau for flora & fauna; to Goba "
                    },
                    {
                        day: "4",
                        description: "Visit Bale Mts. Nat. Park for wildlife viewing; drive to Awassa"
                    },
                    {
                        day: "5",
                        description: "Drive to Chencha - Dorze village; to Arba Minch"
                    },
                    {
                        day: "6",
                        description: "Drive to Konso; Weito; Key Afer weekly market; to Jinka "
                    },
                    {
                        day: "7",
                        description: "Drive to highlands to visit Mursi; via Mago Park to Murulle"
                    },
                    {
                        day: "8",
                        description: "Drive to Dimeka for weekly Hamer & Bena market; to Murulle"
                    },
                    {
                        day: "9",
                        description: "Drive to Kangatan to visit Bume; to Korcho to visit Karo; Murulle"
                    },
                    {
                        day: "10",
                        description: "Drive to Geleb village; to Turmi weekly market; to Arba Minch"
                    },
                    {
                        day: "11",
                        description: "Drive to Nech Sar Nat. Park; boat on Lake Chamo; Arba Minch"
                    },
                    {
                        day: "12",
                        description: "Drive to Lake Langano; to Abiata-Shalla Nat. Park; to Addis"
                    },
                    {
                        day: "13",
                        description: "Fly to Axum; visit stelae field, tombs of Kings, church & museum"
                    },
                    {
                        day: "14",
                        description: "Fly to Lalibela; visit 11 rock-hewn churches"
                    },
                    {
                        day: "15",
                        description: "Excursion by mule or drive to church outside Lalibela"
                    },
                    {
                        day: "16",
                        description: "Fly to Gondar; visit castles & baths of Kings; Church "
                    },
                    {
                        day: "17",
                        description: "Drive to Simien Mts. Nat. Park for wildlife & scenery; to Gondar "
                    },
                    {
                        day: "18",
                        description: "Boat on Lake Tana to see monasteries: Gorgora to Bahir Dar "
                    },
                    {
                        day: "19",
                        description: "Drive to Blue Nile Falls; visit the open market & sites "
                    },
                    {
                        day: "20",
                        description: "Fly to Addis; afternoon leisure; city tour or shopping "
                    },
                    {
                        day: "21",
                        description: "Fly to Dire Dawa; drive to Harar for market, sites & hyena man"
                    },
                    {
                        day: "22",
                        description: "Visit Harari home; drive to Dire Dawa; fly to Addis; cultural night"
                    },
                    {
                        day: "23",
                        description: "Departure"
                    },
                ],
            },
        ]
    },
]

export default itineraries;