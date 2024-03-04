import "/src/index.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Projects() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-mono">ARDIOPUTRA</h1>
        <ul className="hidden md:flex">
          <li className="p-4 hover:bg-[#c026d3]">
            {" "}
            <a href="/">Home</a>
          </li>
          <li className="p-4 hover:bg-[#c026d3]">
            <a href="/portfolio/projects">Projects</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <h1 className="px-4 pt-4 w-full text-3xl font-mono">ARDIOPUTRA</h1>
          <ul className="p-4 pt-4 uppercase font-mono">
            <li className="p-4 border-b border-black-600">
              <a href="/portfolio/">Home</a>
            </li>
            <li className="p-4 border-b border-black-600">
              <a href="/portfolio/projects/">Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-600">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            My Projects
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://innovillage.id/storage/article_thumbnails/min_article_thumbnails_b36b7d5a71b425d334a425ce7da5d4aa.jpeg"
                  alt="Innovillage 2022"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white font-bold text-center">
                    <a
                      href="https://innovillage.id/artikel/pemanfaatan-limbah-jerami-padi-sebagai-penanaman-jamur-merang-sebagai-alternatif-penghasilan-rumah-tangga-berbasis-internet-of-things"
                      target="blank"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Pemanfaatan Limbah Jerami Padi Sebagai Penanaman Jamur
                      Merang Sebagai Alternatif Penghasilan Rumah Tangga
                      Berbasis Internet of Things
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white text-center">
                    Internet of Things, ESP32, Embedded System, C++
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://github.com/ardioputra/Cekapurum/raw/main/IMG_6650.jpg"
                  alt="Cekapurum"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white font-bold text-center">
                    <a
                      href="https://github.com/ardioputra/Cekapurum"
                      target="blank"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Cekapurum (Pencegahan Kebakaran Dapur Rumah)
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white text-center">
                    Internet of Things, ESP 8266, Embedded System, C++, Web
                    Development (Node.js Based)
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://www.logotypes101.com/logos/280/9CAA74982DF68DB2243DF3CE95F2D60C/selenium-logo.png"
                  alt="Automation Instagram"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white font-bold text-center">
                    <a
                      href="https://github.com/ardioputra/Instagram-Auto-Like-Comment"
                      target="blank"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Automation Instagram For Liking, Comment, and Follow using
                      Selenium
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white text-center">
                    Automation, Python, Selenium
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="bukti_publikasi.PNG"
                  alt="Penerapan Internet of Thing (IoT) Dalam Pengendalian Suhu, Kelembaban dan PH Air Kolam pada Mini EduFarm"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white font-bold text-center">
                    <a
                      href="https://www.researchgate.net/publication/373300453_Penerapan_Internet_of_Thing_IoT_Dalam_Pengendalian_Suhu_Kelembaban_dan_PH_Air_Kolam_pada_Mini_EduFarm"
                      target="blank"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Penerapan Internet of Thing (IoT) Dalam Pengendalian Suhu,
                      Kelembaban dan PH Air Kolam pada Mini EduFarm
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white text-center">
                    Internet of Things, C++, Embedded System
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="hama.PNG"
                  alt="PENDETEKSI PENYAKIT DAN HAMA MENGGUNAKAN IMAGE CLASSIFICATION PADA HIDROPONIK SAWI BERBASIS IOT"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white font-bold text-center">
                    <a
                      href="https://github.com/ardioputra/tugasahkir-haarcascadeHSV"
                      target="blank"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Pendeteksi Penyakit dan Hama Menggunakan Image
                      Classification Pada Hidroponik Sawi Berbasis IoT
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white text-center">
                    Internet of Things, Raspberry Pi 3, Python, HSV, Haar
                    Cascade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
