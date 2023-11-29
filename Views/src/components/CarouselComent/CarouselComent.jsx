import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./CarouselComent.css"

const CarouselComent = () => {
    return (
      <>
        <div className='carousel carouselDesktop'>
             <Swiper
                spaceBetween={0}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
             >
            <SwiperSlide>
              <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Lilian Carvalho</p>
                </div>
                <p>A AfroGlow tem sido uma aliada importante na construção da autoestima da minha filha, ensinando-a a abraçar seus cabelos cacheados com orgulho.</p>
              </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Marcos Vinicius</p>
                </div>
                <p>Nossa jornada para aprender a cuidar dos cabelos cacheados da nossa filha foi transformada por esta plataforma. Os artigos informativos e as dicas práticas nos ajudaram a melhorar a saúde dos cachos da nossa pequena</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Lais Carvalho</p>
                </div>
                <p>Cuidar dos cachos do nosso filho nunca foi tão fácil graças a esta plataforma. Estamos gratos por todos os recursos disponíveis, desde produtos recomendados até orientações sobre como pentear os cabelos cacheados</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Mariana Sanches</p>
                </div>
                <p>Estou muito satisfeito com essa plataforma! Ela tem sido uma aliada importante na construção da autoestima da minha filha, ensinando-a a abraçar seus cabelos cacheados com orgulho.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Vitoria</p>
                </div>
                <p>Estamos gratos por todos os recursos disponíveis, desde produtos recomendados até orientações sobre como pentear os cabelos cacheados</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='carousel carouselTablet'>
             <Swiper
                spaceBetween={0}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
             >
            <SwiperSlide>
              <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Lilian Carvalho</p>
                </div>
                <p>A AfroGlow tem sido uma aliada importante na construção da autoestima da minha filha, ensinando-a a abraçar seus cabelos cacheados com orgulho.</p>
              </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Marcos Vinicius</p>
                </div>
                <p>Nossa jornada para aprender a cuidar dos cabelos cacheados da nossa filha foi transformada por esta plataforma. Os artigos informativos e as dicas práticas nos ajudaram a melhorar a saúde dos cachos da nossa pequena</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Lais Carvalho</p>
                </div>
                <p>Cuidar dos cachos do nosso filho nunca foi tão fácil graças a esta plataforma. Estamos gratos por todos os recursos disponíveis, desde produtos recomendados até orientações sobre como pentear os cabelos cacheados</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Mariana Sanches</p>
                </div>
                <p>Estou muito satisfeito com essa plataforma! Ela tem sido uma aliada importante na construção da autoestima da minha filha, ensinando-a a abraçar seus cabelos cacheados com orgulho.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Vitoria</p>
                </div>
                <p>Estamos gratos por todos os recursos disponíveis, desde produtos recomendados até orientações sobre como pentear os cabelos cacheados</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='carousel carouselMobile'>
             <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
             >
            <SwiperSlide>
              <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Lilian Carvalho</p>
                </div>
                <p>A AfroGlow tem sido uma aliada importante na construção da autoestima da minha filha, ensinando-a a abraçar seus cabelos cacheados com orgulho.</p>
              </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Marcos Vinicius</p>
                </div>
                <p>Nossa jornada para aprender a cuidar dos cabelos cacheados da nossa filha foi transformada por esta plataforma. Os artigos informativos e as dicas práticas nos ajudaram a melhorar a saúde dos cachos da nossa pequena</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Lais Carvalho</p>
                </div>
                <p>Cuidar dos cachos do nosso filho nunca foi tão fácil graças a esta plataforma. Estamos gratos por todos os recursos disponíveis, desde produtos recomendados até orientações sobre como pentear os cabelos cacheados</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Mariana Sanches</p>
                </div>
                <p>Estou muito satisfeito com essa plataforma! Ela tem sido uma aliada importante na construção da autoestima da minha filha, ensinando-a a abraçar seus cabelos cacheados com orgulho.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='cardComent'>
                <div className='coment'>
                  <img src='persoBlue.png' alt='personagem feminina com camisa azul'/>
                  <p>Vitoria</p>
                </div>
                <p>Estamos gratos por todos os recursos disponíveis, desde produtos recomendados até orientações sobre como pentear os cabelos cacheados</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </>
    )
}

export default CarouselComent