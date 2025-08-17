// ===== CONFIGURACIÓN GLOBAL =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== INICIALIZACIÓN PRINCIPAL =====
function initializeWebsite() {
    initializeHeader();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeParallaxEffects();
    initializeInteractiveElements();
    initializeStatisticsCounter();
    initializeTypingEffect();
    initializeParticleSystem();
    initializeCatalogModal();
    initializeFireworks();
}

// ===== ARRAY DE IMÁGENES DE INSTAGRAM (CON PROXY CORS) =====
const instagramImages = [
    // Usando proxy CORS para evitar bloqueos
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-19/487913847_2354716918239754_8213611813572826882_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMxIn0&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=EQS5W814hk4Q7kNvwESBAn8&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=GHf5FB0KUnVBml0IAALX9UZtnPxxbkULAAAB3203200j-ccb7-5&oh=00_AfUbhZswEAmQtXC4dZuDV6s_0eyLa02Ac9fhMIhMXVdCbw&oe=68A721B8&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/504148672_1221213486183119_4708917430801955435_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=rOgCmCHyfU8Q7kNvwHf4reG&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfWOl_Sk46cDUp8a9rVE8aleFtvZSU7TEZiyfzn4GeR0BQ&oe=68A720E9&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/488059817_17878283925280089_3029518742963970805_n.jpg?stp=dst-jpg_e15_s640x640_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=VcTYQVOfdjMQ7kNvwGr1JS1&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfU145emheSo1w9KZ6cekZbSlT6dgqFGrd-qfZATLwQ0LQ&oe=68A71D72&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/520179314_17890922556280089_6142135614363636132_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=VnjdhqHmOvMQ7kNvwHniI6n&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfWUOIs0yU_ISNXERhyakj-aQ8ggbqldav9ubKIFIrpYXA&oe=68A73398&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/520725667_17890806546280089_7676014621175102875_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=ThtU4YCrjTgQ7kNvwHm2LpR&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfXtisrakMkwFI9Ck0Yyz2rDImjL78Ruqzon2Yt9kwq6VQ&oe=68A73B23&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/519426843_17890684887280089_2378861190387751068_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=V3kr9Ul3bUoQ7kNvwFZLfZf&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfUozyOQNY_wlLU6AtSKKDATQiQhGHK6EVByKk5rGFzC3g&oe=68A722E4&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/517930235_17890061478280089_653721639344047225_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=O_-7WX4S_eEQ7kNvwEKM1UY&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfXJ2q_h9GsJpAK-Gz-NpUOdrXqpAuR6_gHJX_E5Na1VwQ&oe=68A744A1&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/517412993_17889824610280089_7751953980532445299_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=lCo1U-3fwu0Q7kNvwF9AgDK&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfVKmdGvkcMPHJiXhtkeBUiWnNwdDmsTBVYSJmdcZ0FGAw&oe=68A72198&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/514498400_17889122319280089_3629998005607119365_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=ipAqU1dqFd8Q7kNvwF3K0WP&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfX3zQlpz_tfsa4CeuA9hXVH45qV8z5IXywe_yyEuGyS2A&oe=68A7368D&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/515311672_17889007272280089_8140202801610255587_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=5wz44Q7j1sQQ7kNvwFC4XJk&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfXv-SElRbxml2xjsD8sMS48jpqkW_ILqc0YjSPQGR6cAQ&oe=68A7429A&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/509644612_17888884467280089_4402215633070596092_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=xo2md94PcN4Q7kNvwFQVfQT&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfUqw2aB1SkPQauWC-jYrKsMI3cQG-nqOx973XjUJ-NEbQ&oe=68A71C53&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/504381917_17888432985280089_9065985465492509422_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=skNVlF7kOj8Q7kNvwEA8aFM&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfVXWAoQj6lTiW2YK-H39RMox0ce9tctgC2fmSaQKKiiXw&oe=68A71393&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/503581528_17888044134280089_3000237619083517778_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=0GNRTeRp2cgQ7kNvwHhGxVK&_nc_gid=6fZ3LeZSnB3OoKlhLXAzAA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfW0UfTuiZtQeWUv5Ug6rWr9bPLCMxZrNOH3CMUiIOG84A&oe=68A73933&_nc_sid=8b3546',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/509257708_17887482285280089_4162208528466578347_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHt3zfy77vHJwDWrAIeik7sdGLDwd1qxK9VF-Arh5LbxkfrQsG3YjA9ZXuOvcgHD5SBgY4Vp7JRJ2UwCCOWV9NT&_nc_ohc=73ujwf5Bv0kQ7kNvwEBtiK6&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfX-3ApWoATwNMf43A2ADhus03SXvu8R31THKtM1CSwOGg&oe=68A72DA8&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/508670597_17887340577280089_298518990658615089_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHt3zfy77vHJwDWrAIeik7sdGLDwd1qxK9VF-Arh5LbxkfrQsG3YjA9ZXuOvcgHD5SBgY4Vp7JRJ2UwCCOWV9NT&_nc_ohc=crYffX2ubkQQ7kNvwEjyksE&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfUglrBH0a89-a4-Pz7oV2sYOLReZ0HuzOp0P9XrtLKPHg&oe=68A714C3&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/504828799_17886492309280089_6814449547340213033_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHt3zfy77vHJwDWrAIeik7sdGLDwd1qxK9VF-Arh5LbxkfrQsG3YjA9ZXuOvcgHD5SBgY4Vp7JRJ2UwCCOWV9NT&_nc_ohc=qEUVHieH3G8Q7kNvwHLx8CB&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfW0BIYW0l706wZBOAg5q0mHNigkcE-msc3LdGiVDAooIQ&oe=68A7115B&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/505181343_17886387303280089_8930825964695941059_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHt3zfy77vHJwDWrAIeik7sdGLDwd1qxK9VF-Arh5LbxkfrQsG3YjA9ZXuOvcgHD5SBgY4Vp7JRJ2UwCCOWV9NT&_nc_ohc=N8N7WrMRg0gQ7kNvwH9_qId&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfUSqvqoDI4hAgTn3HdCdKm9TDxiiAwAtmK8DP9xTbZrig&oe=68A745B8&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/504025804_17885725941280089_1768751757953018171_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHt3zfy77vHJwDWrAIeik7sdGLDwd1qxK9VF-Arh5LbxkfrQsG3YjA9ZXuOvcgHD5SBgY4Vp7JRJ2UwCCOWV9NT&_nc_ohc=TgSms58Pr_QQ7kNvwHABODX&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfUhLP47hw9AecQW3OhAhkoXnyw-V-RGjd6QMM23x9U2FQ&oe=68A735E0&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/503666493_17885602902280089_9055265280234065810_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHt3zfy77vHJwDWrAIeik7sdGLDwd1qxK9VF-Arh5LbxkfrQsG3YjA9ZXuOvcgHD5SBgY4Vp7JRJ2UwCCOWV9NT&_nc_ohc=TxJvbsfd2dQQ7kNvwErCgud&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfW8UtG-nYjtZ56REAuzp8HVEPlpf4DHhpQgBHmpFFhA4Q&oe=68A718F9&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/503313322_17885467002280089_1089196267295089252_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=cq9otW-gMaQQ7kNvwEQPcQo&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfUzgsJM_Oi56h2FQTddOP_gNowWY0VehyTzdbp6F5FzDQ&oe=68A72110&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/502708365_17885122761280089_1992351179631873569_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=kiE1yAE1xNEQ7kNvwEIsdEd&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfXX_R8wfjIOpEjOYIxBtQPcsLGlFU5lSXELEg1XQDo-BQ&oe=68A71DBE&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/501963734_17884978812280089_4474518273052791893_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=oO4j3zfbXogQ7kNvwE4tVer&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfX2G8_dHCx5DGx1TURVp8ONzm6TfvfutNSUAec550h7WQ&oe=68A71FAD&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/502195972_17884862844280089_799385190441909876_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=U2Z2Fql4YT4Q7kNvwHZc6bR&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfU-oZS9jOvLc6qcFVN-MSKs1pXURoU31yEVZbq-Aa5WdA&oe=68A72EA0&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/500070317_17883851511280089_3305473610954443274_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=dUPxVbnb0AEQ7kNvwGXVD9x&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfXoT0AF2_mZyEKHxJhLWYGLoVESx4J9J_jIH_d2dEilCg&oe=68A72FA4&_nc_sid=bc0c2c',
    'https://cors-anywhere.herokuapp.com/https://instagram.fsti9-1.fna.fbcdn.net/v/t51.2885-15/498509279_17883732132280089_441096236872327430_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fsti9-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEQvtDT1_LUlAUT1CeFyFdYeg-605zR58BLxNJ-fKEoeZo41nw0P_rx8TaAfb39-XyowH5OP6fhK2ULx-h-yVjj&_nc_ohc=syj-pFoKausQ7kNvwECb1PD&_nc_gid=lTPpyfx16pDqIwupTeY_1w&edm=APU89FABAAAA&ccb=7-5&oh=00_AfXOGVdkxiKycyjMj_UzhWhvVXH0KsL5DNySrDS5JJnFeQ&oe=68A74567&_nc_sid=bc0c2c'
];

// ===== HEADER Y NAVEGACIÓN =====
function initializeHeader() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Efecto de transparencia del header
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Efecto de ocultar/mostrar header al hacer scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ===== SCROLL SUAVE =====
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMACIONES DE SCROLL =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Efecto de aparición escalonada para cards
                if (entry.target.classList.contains('product-category')) {
                    const items = entry.target.querySelectorAll('.product-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos con animaciones
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .product-category');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== EFECTOS PARALLAX =====
function initializeParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero, .about-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== ELEMENTOS INTERACTIVOS =====
function initializeInteractiveElements() {
    // Efecto hover en product items
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            createSparkles(this);
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de partículas en el hero
    initializeParticleSystem();
    
    // Efecto de typing en el título principal
    initializeTypingEffect();
}

// ===== SISTEMA DE PARTÍCULAS =====
function initializeParticleSystem() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Crear partículas flotantes
    for (let i = 0; i < 50; i++) {
        createParticle(hero);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
    `;
    
    container.appendChild(particle);
    
    // Limpiar partículas después de la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 15000);
}

// ===== EFECTO DE TYPING =====
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Iniciar typing después de un delay
    setTimeout(typeWriter, 500);
}

// ===== CONTADOR DE ESTADÍSTICAS =====
function initializeStatisticsCounter() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    };
    
    // Observar cuando las estadísticas estén visibles
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        if (counter.textContent.match(/\d+/)) {
            statsObserver.observe(counter);
        }
    });
}

// ===== MODAL DEL CATÁLOGO =====
function initializeCatalogModal() {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const catalogModal = document.getElementById('catalogModal');
    const closeModal = document.getElementById('closeModal');
    const testLoadBtn = document.getElementById('testLoadBtn');
    
    if (viewMoreBtn && catalogModal) {
        viewMoreBtn.addEventListener('click', function() {
            catalogModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            createFireworks();
            
            // Cargar las imágenes de Instagram cuando se abra el modal
            setTimeout(() => {
                loadInstagramCatalog();
            }, 300);
        });
    }
    
    // Botón de prueba para cargar imágenes manualmente
    if (testLoadBtn) {
        testLoadBtn.addEventListener('click', function() {
            console.log('🔄 Botón de prueba clickeado');
            loadInstagramCatalog();
        });
    }
    
    // Botón de prueba para verificar carga de imágenes
    const testImageBtn = document.getElementById('testImageBtn');
    if (testImageBtn) {
        testImageBtn.addEventListener('click', function() {
            console.log('🧪 Botón de prueba de imágenes clickeado');
            testImageLoading();
        });
    }
    
    // Botón para probar proxy alternativo
    const alternativeProxyBtn = document.getElementById('alternativeProxyBtn');
    if (alternativeProxyBtn) {
        alternativeProxyBtn.addEventListener('click', function() {
            console.log('🌐 Botón de proxy alternativo clickeado');
            loadInstagramCatalogAlternative();
        });
    }
    
    // Botón para probar todos los proxies
    const testAllProxiesBtn = document.getElementById('testAllProxiesBtn');
    if (testAllProxiesBtn) {
        testAllProxiesBtn.addEventListener('click', function() {
            console.log('🧪 Botón de probar todos los proxies clickeado');
            testAllProxies();
        });
    }
    
    if (closeModal && catalogModal) {
        closeModal.addEventListener('click', function() {
            catalogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Cerrar modal al hacer clic fuera
    if (catalogModal) {
        catalogModal.addEventListener('click', function(e) {
            if (e.target === catalogModal) {
                catalogModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && catalogModal.classList.contains('active')) {
            catalogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ===== FUNCIÓN PARA CARGAR EL CATÁLOGO DE INSTAGRAM =====
function loadInstagramCatalog() {
    console.log('🚀 Función loadInstagramCatalog ejecutándose...');
    console.log('📍 Timestamp:', new Date().toLocaleTimeString());
    
    // Esperar un poco más para asegurar que el modal esté completamente visible
    setTimeout(() => {
        const catalogGrid = document.getElementById('instagramCatalog');
        console.log('📋 Elemento catalogGrid encontrado:', catalogGrid);
        console.log('🖼️ Número de imágenes en el array:', instagramImages.length);
        
        if (catalogGrid && instagramImages.length > 0) {
            // Mostrar contador de imágenes
            console.log(`🎉 Cargando ${instagramImages.length} imágenes reales de FarluxRD`);
            
            // Generar HTML simple y directo
            let htmlContent = '';
            instagramImages.forEach((url, index) => {
                htmlContent += `
                    <div class="catalog-item" data-index="${index}">
                        <img src="${url}" alt="Producto FarluxRD ${index + 1}" class="catalog-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="catalog-fallback" style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, #2c5aa0, #4a90e2); border-radius: 10px; justify-content: center; align-items: center; color: white; font-weight: bold; text-align: center; padding: 1rem;">
                            <div>
                                <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                                <span>Producto ${index + 1}</span>
                            </div>
                        </div>
                        <div class="catalog-overlay">
                            <span>Producto ${index + 1}</span>
                        </div>
                    </div>
                `;
            });
            
            // Insertar el HTML
            catalogGrid.innerHTML = htmlContent;
            
            console.log('✅ HTML del catálogo generado correctamente');
            console.log('🔍 Número de elementos creados:', catalogGrid.children.length);
            
            // Verificar que las imágenes se estén cargando
            setTimeout(() => {
                const images = catalogGrid.querySelectorAll('img');
                console.log('🖼️ Imágenes encontradas en el DOM:', images.length);
                
                images.forEach((img, index) => {
                    console.log(`📸 Imagen ${index + 1}:`, img.src);
                    console.log(`📏 Dimensiones: ${img.naturalWidth}x${img.naturalHeight}`);
                });
            }, 500);
            
            // Añadir efectos de hover y animaciones
            addCatalogEffects();
            
        } else {
            console.log('❌ Error: catalogGrid o instagramImages no disponibles');
            if (catalogGrid) {
                catalogGrid.innerHTML = `
                    <div class="no-images-message">
                        <i class="fas fa-image"></i>
                        <p>No hay imágenes disponibles</p>
                        <small>Error: ${!catalogGrid ? 'catalogGrid no encontrado' : 'instagramImages vacío'}</small>
                    </div>
                `;
            }
        }
    }, 200); // Aumentar el delay para asegurar que el modal esté listo
}

// ===== FUNCIÓN ALTERNATIVA CON PROXY DIFERENTE =====
function loadInstagramCatalogAlternative() {
    console.log('🔄 Cargando catálogo con proxy alternativo...');
    
    // Array con proxy alternativo más confiable
    const alternativeImages = instagramImages.map(url => {
        // Remover el proxy anterior y usar uno nuevo
        const cleanUrl = url.replace('https://cors-anywhere.herokuapp.com/', '');
        return `https://api.allorigins.win/raw?url=${encodeURIComponent(cleanUrl)}`;
    });
    
    const catalogGrid = document.getElementById('instagramCatalog');
    if (catalogGrid) {
        let htmlContent = '';
        alternativeImages.forEach((url, index) => {
            htmlContent += `
                <div class="catalog-item" data-index="${index}">
                    <img src="${url}" alt="Producto FarluxRD ${index + 1}" class="catalog-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="catalog-fallback" style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, #2c5aa0, #4a90e2); border-radius: 10px; justify-content: center; align-items: center; color: white; font-weight: bold; text-align: center; padding: 1rem;">
                        <div>
                            <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                            <span>Producto ${index + 1}</span>
                        </div>
                    </div>
                    <div class="catalog-overlay">
                        <span>Producto ${index + 1}</span>
                    </div>
                </div>
            `;
        });
        
        catalogGrid.innerHTML = htmlContent;
        addCatalogEffects();
    }
}

// ===== FUNCIÓN CON TERCER PROXY (MÁS CONFIABLE) =====
function loadInstagramCatalogThird() {
    console.log('🌍 Cargando catálogo con tercer proxy...');
    
    // Array con tercer proxy más confiable
    const thirdImages = instagramImages.map(url => {
        // Remover el proxy anterior y usar uno nuevo
        const cleanUrl = url.replace('https://cors-anywhere.herokuapp.com/', '');
        return `https://thingproxy.freeboard.io/fetch/${cleanUrl}`;
    });
    
    const catalogGrid = document.getElementById('instagramCatalog');
    if (catalogGrid) {
        let htmlContent = '';
        thirdImages.forEach((url, index) => {
            htmlContent += `
                <div class="catalog-item" data-index="${index}">
                    <img src="${url}" alt="Producto FarluxRD ${index + 1}" class="catalog-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="catalog-fallback" style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, #2c5aa0, #4a90e2); border-radius: 10px; justify-content: center; align-items: center; color: white; font-weight: bold; text-align: center; padding: 1rem;">
                        <div>
                            <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                            <span>Producto ${index + 1}</span>
                        </div>
                    </div>
                    <div class="catalog-overlay">
                        <span>Producto ${index + 1}</span>
                    </div>
                </div>
            `;
        });
        
        catalogGrid.innerHTML = htmlContent;
        addCatalogEffects();
    }
}

// ===== FUNCIÓN PARA PROBAR TODOS LOS PROXIES =====
function testAllProxies() {
    console.log('🧪 Probando todos los proxies disponibles...');
    
    const catalogGrid = document.getElementById('instagramCatalog');
    if (!catalogGrid) return;
    
    // Mostrar mensaje de prueba
    catalogGrid.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: #2c5aa0;">
            <h3>🧪 Probando Proxies CORS...</h3>
            <p>Selecciona un proxy para probar:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                <button onclick="loadInstagramCatalog()" style="padding: 0.5rem 1rem; background: #2c5aa0; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    🔄 Proxy 1 (CORS Anywhere)
                </button>
                <button onclick="loadInstagramCatalogAlternative()" style="padding: 0.5rem 1rem; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    🌐 Proxy 2 (AllOrigins)
                </button>
                <button onclick="loadInstagramCatalogThird()" style="padding: 0.5rem 1rem; background: #ff6b35; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    🌍 Proxy 3 (ThingProxy)
                </button>
            </div>
        </div>
    `;
}

// ===== FUNCIÓN DE PRUEBA PARA VERIFICAR IMÁGENES =====
function testImageLoading() {
    console.log('🧪 Función de prueba ejecutándose...');
    console.log('📊 Array instagramImages:', instagramImages);
    console.log('🔢 Longitud del array:', instagramImages.length);
    
    // Probar la primera imagen
    if (instagramImages.length > 0) {
        const testImg = new Image();
        testImg.onload = function() {
            console.log('✅ Primera imagen cargada correctamente:', this.src);
            console.log('📏 Dimensiones:', this.naturalWidth, 'x', this.naturalHeight);
        };
        testImg.onerror = function() {
            console.log('❌ Error al cargar la primera imagen:', this.src);
        };
        testImg.src = instagramImages[0];
    }
}

// ===== FUNCIÓN PARA AÑADIR EFECTOS ESPECIALES AL CATÁLOGO =====
function addCatalogEffects() {
    const catalogItems = document.querySelectorAll('.catalog-item');
    
    catalogItems.forEach((item, index) => {
        // Efecto de aparición escalonada
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Efecto de hover con información
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.querySelector('.catalog-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.querySelector('.catalog-overlay').style.opacity = '0';
        });
    });
}

// ===== SISTEMA DE FUEGOS ARTIFICIALES =====
function initializeFireworks() {
    // Crear fuegos artificiales automáticos
    setInterval(() => {
        if (Math.random() > 0.7) {
            createFireworks();
        }
    }, 3000);
}

function createFireworks() {
    const container = document.body;
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    firework.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: 4px;
        height: 4px;
        background: ${randomColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: fireworks 1s ease-out forwards;
    `;
    
    container.appendChild(firework);
    
    // Crear explosión de partículas
    setTimeout(() => {
        createExplosion(firework.offsetLeft, firework.offsetTop, randomColor);
        if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
        }
    }, 500);
}

function createExplosion(x, y, color) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 3px;
            height: 3px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(particle);
        
        // Animar partícula
        const startTime = Date.now();
        const animateParticle = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / 1000;
            
            if (progress < 1) {
                const newX = x + Math.cos(angle) * velocity * progress;
                const newY = y + Math.sin(angle) * velocity * progress + (progress * progress * 100);
                const opacity = 1 - progress;
                const scale = 1 - progress * 0.5;
                
                particle.style.left = newX + 'px';
                particle.style.top = newY + 'px';
                particle.style.opacity = opacity;
                particle.style.transform = `scale(${scale})`;
                
                requestAnimationFrame(animateParticle);
            } else {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }
        };
        
        requestAnimationFrame(animateParticle);
    }
}

// ===== CREAR CHISPAS =====
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1'];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.cssText = `
            position: absolute;
            left: ${Math.random() * rect.width}px;
            top: ${Math.random() * rect.height}px;
            width: 4px;
            height: 4px;
            background: ${randomColor};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 1s ease-out forwards;
        `;
        
        element.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
}

// ===== EFECTOS DE HOVER AVANZADOS =====
function initializeAdvancedHovers() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// ===== INICIALIZAR FUNCIONES ADICIONALES =====
document.addEventListener('DOMContentLoaded', function() {
    initializeAdvancedHovers();
    
    // Añadir año actual al footer
    const footerYear = document.querySelector('.footer-bottom');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
    }
    
    // Efectos especiales en las categorías
    const categories = document.querySelectorAll('.product-category');
    categories.forEach((category, index) => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            createFireworks();
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
    }
}

function update() {
    ticking = false;
}

// ===== SCROLL SUAVE MEJORADO =====
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// ===== EFECTOS DE CARGA =====
window.addEventListener('load', function() {
    // Efecto de entrada para las imágenes
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('loaded');
        }, index * 100);
    });
    
    // Crear fuegos artificiales de bienvenida
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFireworks();
            }, i * 200);
        }
    }, 1000);
});
