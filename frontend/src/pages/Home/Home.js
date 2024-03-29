import React, { useEffect, useRef } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Typed from 'typed.js';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Cursor from '../../components/Cursor/Cursor';
import Cardy from '../../components/Card/Card';


function Home() {
    const el = useRef(null);
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    useEffect(() => {
        var options = {
            strings: ["Hi, We're RaqetReader."],
            typeSpeed: 50
        };

        // el.current will point to the <span> element in the render function
        // This el.current.querySelector('.element') will help Typed.js to recognize where to type  
        new Typed(el.current, options);

        // Unmount Typed.js instance on component unmount to prevent memory leaks
        return () => {
            if (el.current) {
                el.current.innerHTML = '';
            }
        };
    }, []);
    return (
        <div style={{ position: "relative", zIndex:0 }}>
            <NavigationBar />
            <Particles
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0
                }}
                id="tsparticles"
                init={particlesInit}
                options={{
                    "background": {
                        color: "#000000", // Background color in hexadecimal format
                    },
                    "particles": {
                        "number": {
                          "value": 80,
                          "density": {
                            "enable": true,
                            "value_area": 800
                          }
                        },
                        "color": {
                          "value": "#00ff17"
                        },
                        "shape": {
                          "type": "circle",
                          "stroke": {
                            "width": 0,
                            "color": "#000000"
                          },
                          "polygon": {
                            "nb_sides": 5
                          },
                          "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                          }
                        },
                        "opacity": {
                          "value": 0.5,
                          "random": false,
                          "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                          }
                        },
                        "size": {
                          "value": 3,
                          "random": true,
                          "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                          }
                        },
                        "line_linked": {
                          "enable": true,
                          "distance": 150,
                          "color": "#ffffff",
                          "opacity": 0.4,
                          "width": 1
                        },
                        "move": {
                          "enable": true,
                          "speed": 4,
                          "direction": "none",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "repulse"
                          },
                          "onclick": {
                            "enable": true,
                            "mode": "push"
                          },
                          "resize": true
                        },
                        "modes": {
                          "grab": {
                            "distance": 400,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 200,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                      "retina_detect": true
                }}
            />
        <div id="intro-section" style={{ position: 'absolute', zIndex: 1, width: '100%', textAlign: 'center', paddingTop: '100px', paddingBottom: '100px', color:"white" }}>
            <h2 ref={el}></h2>
        </div>
            <Cardy />
            <Cursor />
        </div>
    );
}

export default Home;