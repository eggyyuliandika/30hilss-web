import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div>
      {/* <div className='px-[8px]   '>
       <div className='pl-[8px] mt-[32px]'>
        <img src="logo.svg" />
       </div> 
       <div className='lg:flex pt-[30px] text-[15px] gap-[13px] font-semibold hidden'>
         <p className='mr-[7px]'> Who we are </p>
         <p className='mr-[10px]'>Process & Focus</p>
         <p className=''>Our Work</p>
         <p className='mr-[8px]'>Tech Stack</p>
         <p className='mr-[9px]'>Career</p>
         <p className='mr-[13px]'>Lets dance 💃</p>
       </div>
      </div>
      <div className='pb-[60px] pt-[105px]  '>
        <div className=' w-[100%]'>        
            <img src="background.jpg"/>      
        </div>
      </div> 
       
      <div className='py-[70px] text-[#242629]'>
        <div className='px-[15px]'>
          <div className='text-center'>
            <h1 className='leading-none text-[43px] font-[900] mb-[50px] '>We are a Digital Product Studio</h1>
          </div>
          <div className='md:grid grid-cols-3  '>
           <div className='font-bold text-[14px] leading-[1.5] '>
            <p>We work as a unified entity where each member makes each project unique. We are a team of like
            minded people passionate about the product, web and mobile technology, but most importantly -
            delivering results.
            </p>
          </div>
          <div className='text-[14px] leading-[1.5]'>
            <p>
            Our interdisciplinary team consist of product developers, software engineers, UI/UX designers,
            mathematicians, cognitive scientists and linguists. We are educated at universities around the globe
            (New York, Vienna, Granada, Milan, Belgrade).
            </p>
          </div>
          <div className='text-[14px] leading-[1.5] pr-[20px]'>
            <p>
            However, team spirit and personal engagement is what we
            value most. Therefore, our team members are not only nerds, but people who run marathons, dance,
            play basketball and participate in the Olympic games.
            </p>
          </div>  
        </div>     
        </div>
      </div>
      <div className='pt-[20px] pb-[60px] '>
        <div>
          <h1 className='text-[#242529] px-[15px] text-[46px] mb-[40px] font-[900] text-center'>Our Process</h1>
        </div>
        <div className='md:grid grid-cols-3 gap-[10px]'>
         <div>
          <div className='px-[15px] mb-[50px]'>
            <div>
              <img className='mx-[auto] my-[0]' src="process1.svg"/>
            </div>
            <div>
              <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Understand</h3>
            </div>
            <div>
              <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                We make sure we understand your ideas before we make them come true. We believe having
                strategy and
                plan is a key to success. Plan exists to be changed and improved by our joint teams.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='px-[15px] mb-[50px]'>
            <div>
              <img className='mx-[auto] my-[0]' src="process2.svg"/>
            </div>
            <div>
              <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Design</h3>
            </div>
            <div>
              <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>           
                Our designers combine art, research and digital strategy but are primarily dedicated to
                ultimate user experience (UX). We put emphases on human experience to create the most memorable and
                beautiful
                product.      
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='px-[15px] mb-[50px]'>
            <div>
              <img className='mx-[auto] my-[0]' src="process3.svg"/>
            </div>
            <div>
              <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Create</h3>
            </div>
            <div>
              <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>      
                We offer the right mix of smart, creative backend, frontend and mobile developers who work
                together to
                make it simple and beautiful. We relay on Agile with Scrum to manage development and
                mitigate risk.      
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='px-[15px] mb-[50px]'>
            <div>
              <img className='mx-[auto] my-[0]' src="process4.svg"/>
            </div>
            <div>
              <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Test</h3>
            </div>
            <div>
              <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>          
                We believe that quality assurance testing (QA) is essential part of product development. This is why
                we constantly test and make improvements.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='px-[15px] mb-[50px]'>
            <div>
              <img className='mx-[auto] my-[0]' src="process5.svg"/>
            </div>
            <div>
              <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Support</h3>
            </div>
            <div>
              <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>         
                 We stay by your side to stimulate growth, implement changes and add improvements.      
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='px-[15px] mb-[50px]'>
            <div>
              <img className='mx-[auto] my-[0]' src="process6.svg"/>
            </div>
            <div>
              <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Innovate</h3>
            </div>
            <div>
              <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                We live in an era of information and innovation. We help you follow your audience and social
              trends to stay on the top of the hill.
              </p>
            </div>
          </div>
        </div>  
        </div>
        
      </div>
      <div className='pb-[60px] pt-[42px] '>
        <div>
          <h1 className='text-[#242529] px-[15px] text-[46px] mb-[40px] font-[900] text-center '>Our Focus</h1>
        </div>
        <div className='md:grid grid-cols-3 '>
          <div>
            <div className='px-[15px] mb-[50px]'>
              <div>
                <img className='mx-[auto] my-[0]' src="focus1.svg"/>
              </div>
              <div>
                <h3 className='text-center mt-[14px] mb-[20px] text-[22px] font-semibold'>Work with startups</h3>
              </div>
              <div>
                <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                We use our UX/UI expertise to help startups create engaging product experiences.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='px-[15px] mb-[42px]'>
              <div>
                <img className='mx-[auto] my-[0]' src="focus2.svg"/>
              </div>
              <div>
                <h3 className='text-center mt-[14px] mb-[20px] text-[22px] font-semibold'>Enterprise apps</h3>
              </div>
              <div>
                <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>           
                We help Enterprise and B2B services improve on their existing or new product ideas.     
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='px-[15px] mb-[30px]'>
              <div>
                <img className='mx-[auto] my-[0]' src="focus3.svg"/>
              </div>
              <div>
                <h3 className='text-center mt-[14px] mb-[20px] text-[22px] font-semibold'>Dedicated teams</h3>
              </div>
              <div>
                <p className='text-center leading-[1.50] text-[#717982] text-[15px] '>      
                We bring together dedicated teams to work with you on new or existing products.     
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='px-[15px] mb-[50px]'>
              <div>
                <img className='mx-[auto] my-[0]' src="focus5.svg"/>
              </div>
              <div>
                <h3 className='text-center mt-[18px] mb-[25px] text-[22px] font-bold'>Partner with developers</h3>
              </div>
              <div>
                <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>          
                We help development teams design & build an amazing interface for their product.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='px-[15px] mb-[50px]'>
              <div>
                <img className='mx-[auto] my-[0]' src="focus6.svg"/>
              </div>
              <div>
                <h3 className='text-center mt-[18px] mb-[25px] text-[22px] font-bold'>Build our own products</h3>
              </div>
              <div>
                <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>         
                Did you know we build our own stuff? Our latest product is Boostowski.      
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='px-[15px] mb-[50px]'>
              <div>
                <img className='mx-[auto] my-[0]' src="focus7.svg"/>
              </div>
              <div>
                <h3 className='text-center mt-[18px] mb-[25px] text-[22px] font-bold'>Agile</h3>
              </div>
              <div>
                <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                We use Scrum to manage work, break projects into smaller stages, rapidly respond
                to change and deliver early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-[60px] px-[15px] '>
        <div className='md:grid grid-cols-2 gap-[30px] '>
          <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec]'>
            <div className="bg-cover rounded-t-lg bg-[url('/portofolio1.png')] h-[240px] w-[100%]">
              <div className='text-center m-h-[125px] pt-[255px] px-[25px]'>
                <h3 className='mb-[10px] text-[22px] font-bold'>Ticketmaster</h3>
                <p className='text-[15px]'>Android and iOS application that enables users to buy tickets for sports, arts, concerts,
                  theatre, festivals and other events around the world.</p>
              </div>
            </div>
          </div>
          <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec]'>
            <div className="bg-cover rounded-t-lg bg-[url('/portofolio2.png')] h-[240px] w-[100%]">
              <div className='text-center m-h-[125px] pt-[255px] px-[25px]'>
                <h3 className='mb-[10px] text-[22px] font-bold'>OTP bank Serbia</h3>
                <p className='text-[15px]'>We have redesigned a OTP bank Serbia e-banking application for corporate and small business users.</p>
              </div>
            </div>
          </div>
          <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec]'>
            <div className="bg-cover rounded-t-lg bg-[url('/portofolio3.png')] h-[240px] w-[100%]">
              <div className='text-center m-h-[125px] pt-[255px] px-[25px]'>
                <h3 className='mb-[10px] text-[22px] font-bold'>Boostowski</h3>
                <p className='text-[15px]'>A service that boots your retail business by setting daily goals, providing results, trainings and awardds for sales people.</p>
              </div>
            </div>
          </div>
          <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec]'>
            <div className="bg-cover rounded-t-lg bg-[url('/portofolio4.png')] h-[240px] w-[100%]">
              <div className='text-center m-h-[125px] pt-[255px] px-[25px]'>
                <h3 className='mb-[10px] text-[22px] font-bold'>PwC Harmonie</h3>
                <p className='text-[15px]'>An engaging HR tool that enables survey creation and gathers relevant data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-[60px] bg-[#eaedfb] px-[15px]'>
        <div className='mb-[50px]'>
          <h1 className='text-center text-[46px] font-[900] '>Our Tech Stack</h1>
        </div>
        <div className=''>
          <img src='footer.svg'/>
        </div>
      </div>
      <div className='py-[60px] px-[15px] '>
        <div>
          <img src="logo.svg" className='w-[72px] h-[22px] '/>
          <div className='my-[25px]'>
           <p>Copyright 2021. 30Hills v2.0.4</p>
           <p>All rights reserved.</p> 
          </div>        
        </div>
        <div>
          <h3 className='mt-[25px] text-[22px] font-bold '>Lets dance</h3>
          <div className='my-[25px] '>
            <p>hello@30hills.com</p>
            <p>00 381 69 667 887</p>
          </div>
        </div>
        <div>
          <h3 className='text-[22px] font-bold'>Location</h3>
          <div className='my-[25px]'>
            <p>Brace Grim 7, first floor</p>
            <p>11000 Belgrade, Serbia</p>
          </div>
        </div>
        <div>
          <h3 className='my-[25px] text-[22px] font-bold '>Follow us</h3>
          <div className='flex '>
            <img className="mr-[24px]" src="fb.svg"/>
            <img className="mr-[24px]" src="twitter.svg"/>
            <img className="mr-[24px]" src="instagram.svg"/>
            <img className="mr-[24px]" src="linkedin.svg"/>
          </div>
        </div>
      </div>  */}


      {/* dekstop */}

      <div className='px-[8px] max-w-[100%]'>
        <div className='md: flex justify-center'>
          <div className='w-[1124px]'>
            <div className='flex justify-between'>      
              <div className='pl-[8px] mt-[32px]'>
                <img src="logo.svg" />
              </div> 
              <div className='lg:flex pt-[36px] text-[15px] gap-[13px] font-semibold md: hidden  '>
                <p className='mr-[7px]'> Who we are </p>
                <p className='mr-[10px]'>Process & Focus</p>
                <p className=''>Our Work</p>
                <p className='mr-[8px]'>Tech Stack</p>
                <p className='mr-[9px]'>Career</p>
                <p className='mr-[13px]'>Lets dance 💃</p>
              </div>   
            </div>        
          </div>   
        </div>    
      </div>
      <div>
        <div className='pt-[90px] pb-[60px]'>
          <div className='max-w-[100%]'>
            <div className='flex justify-center'>
              <img className="w-[1030px]" src="background1.jpg"/>
            </div>
          </div>  
        </div> 
      </div>
      
      {/* <div className='pb-[60px] pt-[105px]  '>
        <div className=' w-[100%]'>        
            <img src="background.jpg"/>      
        </div>
      </div>  */}

      <div className='max-w-[100%] py-[60px]'>
        <div className='flex justify-center'>
          <div className='md:max-w-[1124px]'>
            <div className='text-[#242629] '>
              <div className='px-[15px]'>
                <div className='text-center'>
                  <h1 className='leading-none text-[44px] font-[900] mb-[50px] md:text-[66px] indent-[40px]'>We are a Digital Product Studio</h1>
                </div>
                <div className='md:grid grid-cols-3 gap-[40px]  '>
                <div className='font-bold text-[14px] leading-[1.5] '>
                  <p>We work as a unified entity where each member makes each project unique. We are a team of like
                  minded people passionate about the product, web and mobile technology, but most importantly -
                  delivering results.
                  </p>
                </div>
                <div className='text-[14px] leading-[1.5]'>
                  <p>
                  Our interdisciplinary team consist of product developers, software engineers, UI/UX designers,
                  mathematicians, cognitive scientists and linguists. We are educated at universities around the globe
                  (New York, Vienna, Granada, Milan, Belgrade).
                  </p>
                </div>
                <div className='text-[14px] leading-[1.5] pr-[20px]'>
                  <p>
                  However, team spirit and personal engagement is what we
                  value most. Therefore, our team members are not only nerds, but people who run marathons, dance,
                  play basketball and participate in the Olympic games.
                  </p>
                </div>  
              </div>     
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-[60px] max-w-[100%]'>
        <div className='flex justify-center'>
          <div className='max-w-[1124px]'>
            <div>
              <div>
                <h1 className='text-[#242529] px-[15px] text-[46px] mb-[40px] font-[900] text-center md:text-[66px]'>Our Process</h1>
              </div>
              <div className='md:grid grid-cols-3'>
              <div>
                <div className='px-[15px] mb-[50px]'>
                  <div>
                    <img className='mx-[auto] my-[0]' src="process1.svg"/>
                  </div>
                  <div>
                    <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Understand</h3>
                  </div>
                  <div>
                    <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                      We make sure we understand your ideas before we make them come true. We believe having
                      strategy and
                      plan is a key to success. Plan exists to be changed and improved by our joint teams.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='px-[15px] mb-[50px]'>
                  <div>
                    <img className='mx-[auto] my-[0]' src="process2.svg"/>
                  </div>
                  <div>
                    <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Design</h3>
                  </div>
                  <div>
                    <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>           
                      Our designers combine art, research and digital strategy but are primarily dedicated to
                      ultimate user experience (UX). We put emphases on human experience to create the most memorable and
                      beautiful
                      product.      
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='px-[15px] mb-[50px]'>
                  <div>
                    <img className='mx-[auto] my-[0]' src="process3.svg"/>
                  </div>
                  <div>
                    <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Create</h3>
                  </div>
                  <div>
                    <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>      
                      We offer the right mix of smart, creative backend, frontend and mobile developers who work
                      together to
                      make it simple and beautiful. We relay on Agile with Scrum to manage development and
                      mitigate risk.      
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='px-[15px] mb-[50px]'>
                  <div>
                    <img className='mx-[auto] my-[0]' src="process4.svg"/>
                  </div>
                  <div>
                    <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Test</h3>
                  </div>
                  <div>
                    <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>          
                      We believe that quality assurance testing (QA) is essential part of product development. This is why
                      we constantly test and make improvements.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='px-[15px] mb-[50px]'>
                  <div>
                    <img className='mx-[auto] my-[0]' src="process5.svg"/>
                  </div>
                  <div>
                    <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Support</h3>
                  </div>
                  <div>
                    <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>         
                      We stay by your side to stimulate growth, implement changes and add improvements.      
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='px-[15px] mb-[50px]'>
                  <div>
                    <img className='mx-[auto] my-[0]' src="process6.svg"/>
                  </div>
                  <div>
                    <h3 className='text-center mt-[14px] mb-[25px] text-[22px] font-bold'>Innovate</h3>
                  </div>
                  <div>
                    <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                      We live in an era of information and innovation. We help you follow your audience and social
                    trends to stay on the top of the hill.
                    </p>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[100%] py-[60px]'>
        <div className='flex justify-center'>
          <div className='max-w-[1124px]'>
            <div>
              <div>
                <h1 className='text-[#242529] px-[15px] text-[46px] mb-[40px] font-[900] text-center md:text-[66px] '>Our Focus</h1>
              </div>
              <div className='md:grid grid-cols-3 '>
                <div>
                  <div className='px-[15px] mb-[50px]'>
                    <div>
                      <img className='mx-[auto] my-[0]' src="focus1.svg"/>
                    </div>
                    <div>
                      <h3 className='text-center mt-[14px] mb-[20px] text-[22px] font-semibold'>Work with startups</h3>
                    </div>
                    <div>
                      <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                      We use our UX/UI expertise to help startups create engaging product experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='px-[15px] mb-[42px]'>
                    <div>
                      <img className='mx-[auto] my-[0]' src="focus2.svg"/>
                    </div>
                    <div>
                      <h3 className='text-center mt-[14px] mb-[20px] text-[22px] font-semibold'>Enterprise apps</h3>
                    </div>
                    <div>
                      <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>           
                      We help Enterprise and B2B services improve on their existing or new product ideas.     
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='px-[15px] mb-[30px]'>
                    <div>
                      <img className='mx-[auto] my-[0]' src="focus3.svg"/>
                    </div>
                    <div>
                      <h3 className='text-center mt-[14px] mb-[20px] text-[22px] font-semibold'>Dedicated teams</h3>
                    </div>
                    <div>
                      <p className='text-center leading-[1.50] text-[#717982] text-[15px] '>      
                      We bring together dedicated teams to work with you on new or existing products.     
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='px-[15px] mb-[50px]'>
                    <div>
                      <img className='mx-[auto] my-[0]' src="focus5.svg"/>
                    </div>
                    <div>
                      <h3 className='text-center mt-[18px] mb-[25px] text-[22px] font-bold'>Partner with developers</h3>
                    </div>
                    <div>
                      <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>          
                      We help development teams design & build an amazing interface for their product.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='px-[15px] mb-[50px]'>
                    <div>
                      <img className='mx-[auto] my-[0]' src="focus6.svg"/>
                    </div>
                    <div>
                      <h3 className='text-center mt-[18px] mb-[25px] text-[22px] font-bold'>Build our own products</h3>
                    </div>
                    <div>
                      <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>         
                      Did you know we build our own stuff? Our latest product is Boostowski.      
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='px-[15px] mb-[50px]'>
                    <div>
                      <img className='mx-[auto] my-[0]' src="focus7.svg"/>
                    </div>
                    <div>
                      <h3 className='text-center mt-[18px] mb-[25px] text-[22px] font-bold'>Agile</h3>
                    </div>
                    <div>
                      <p className='text-center leading-[1.50] text-[#717982] text-[15px]'>
                      We use Scrum to manage work, break projects into smaller stages, rapidly respond
                      to change and deliver early.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className='py-[60px] px-[15px] max-w-[100%] md:px-[0px]'>
        <div className='flex justify-center'>
          <div className='max-w-[1124px]'>
            <div>
              <div className='md:grid grid-cols-2 gap-x-[30px] '>
                <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec] md:max-h-[375px]'>
                  <div className="bg-cover rounded-t-lg bg-[url('/portofolio1.png')] h-[240px] w-[100%]">
                    <div className='text-center pt-[255px] px-[25px] '>
                      <h3 className='mb-[10px] text-[22px] font-bold'>Ticketmaster</h3>
                      <p className='text-[15px]'>Android and iOS application that enables users to buy tickets for sports, arts, concerts,
                        theatre, festivals and other events around the world.</p>
                    </div>
                  </div>
                </div>
                <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec] md:max-h-[375px]'>
                  <div className="bg-cover rounded-t-lg bg-[url('/portofolio2.png')] h-[240px] w-[100%]">
                    <div className='text-center pt-[255px] px-[25px]'>
                      <h3 className='mb-[10px] text-[22px] font-bold'>OTP bank Serbia</h3>
                      <p className='text-[15px]'>We have redesigned a OTP bank Serbia e-banking application for corporate and small business users.</p>
                    </div>
                  </div>
                </div>
                <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec] md:max-h-[375px]'>
                  <div className="bg-cover rounded-t-lg bg-[url('/portofolio3.png')] h-[240px] w-[100%]">
                    <div className='text-center pt-[255px] px-[25px]'>
                      <h3 className='mb-[10px] text-[22px] font-bold'>Boostowski</h3>
                      <p className='text-[15px]'>A service that boots your retail business by setting daily goals, providing results, trainings and awardds for sales people.</p>
                    </div>
                  </div>
                </div>
                <div className='mb-[30px] border-2 border-solid border-[#f5f5f7] rounded-[10px] h-[410px] hover:shadow-[0_10px_20px_0_#e8e8ec] md:max-h-[375px]'>
                  <div className="bg-cover rounded-t-lg bg-[url('/portofolio4.png')] h-[240px] w-[100%]">
                    <div className='text-center pt-[255px] px-[25px]'>
                      <h3 className='mb-[10px] text-[22px] font-bold'>PwC Harmonie</h3>
                      <p className='text-[15px]'>An engaging HR tool that enables survey creation and gathers relevant data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-[60px] bg-[#eaedfb] px-[15px]'>
        <div className='max-w-[100%]'>
          <div className='flex justify-center'>
            <div className='max-w-[1124px]'>
              <div>
                <div className='mb-[50px]'>
                  <h1 className='text-center text-[46px] font-[900] md:text-[66px] '>Our Tech Stack</h1>
                </div>
                <div>
                  <img src='footer.svg'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[100%] py-[80px] px-[15px] md:px-[0px] ml-[200px]'>
        <div className='flex justify-start'>
          <div>
            <div className='md: flex '>
              <div className="md:mt-[10px] mr-[80px]">
                <img src="logo.svg" className='w-[72px] h-[22px] '/>
                <div className='my-[25px]'>
                <p>Copyright 2021. 30Hills v2.0.4</p>
                <p>All rights reserved.</p> 
                </div>        
              </div>
              <div className='md: mr-[150px]'>
                <h3 className='mt-[25px] text-[22px] font-bold md:mt-[0px] '>Lets dance</h3>
                <div className='my-[25px] '>
                  <p>hello@30hills.com</p>
                  <p>00 381 69 667 887</p>
                </div>
              </div>
              <div className='md: mr-[90px]'>
                <h3 className='text-[22px] font-bold'>Location</h3>
                <div className='my-[25px]'>
                  <p>Brace Grim 7, first floor</p>
                  <p>11000 Belgrade, Serbia</p>
                </div>
              </div>
              <div>
                <h3 className='my-[25px] text-[22px] font-bold md:mt-[0px] '>Follow us</h3>
                <div className='flex '>
                  <img className="mr-[24px]" src="fb.svg"/>
                  <img className="mr-[24px]" src="twitter.svg"/>
                  <img className="mr-[24px]" src="instagram.svg"/>
                  <img className="mr-[24px]" src="linkedin.svg"/>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
        
      
    </div> 
  </div>   
        
      
  )
}