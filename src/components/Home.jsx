import React from 'react'
import '../styles/home.css'
import NewsletterForm from '../sections/NewsLetterSubscribe'
import SumbitFormTop from '../sections/SumbitFormTop'
import SubmitFormBottom from '../sections/SubmitFormBottom'

const Home = () => {
  return (
    <div>

        <nav className="style__NavigationWrapper-sc-7673406-0 bBfunh">
            <div className="style__DisplayOnLargeUp-sc-648aa1a0-1 kCiLar">
                <div className="style__NavContainer-sc-125058e8-2 style__Container-sc-215432b3-0 dzMLez ilhvPU">
                    <div className="style__Container-sc-6fdcc87e-0 style__NavMenuTopBar-sc-125058e8-3 iTWzCH cidDlP">
                    <a href="/">
                        <div className="style__LogoContainer-sc-1a7bd5c6-0 hOLYSe">
                             <span className='block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 box-sizing: border-box bg-none'>
                                <img alt="Morning Brew Logo" sizes="100vw" src="/images/image.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-left m-auto p-0 border-[none] inset-0"/>  
                             </span>                                 
                        </div>
                    </a>
                    <style
                        data-emotion="css-3rng96"
                        dangerouslySetInnerHTML={{
                        __html:
                        "\n                            .css-3rng96 {\n                                display: -webkit-box;\n                                display: -webkit-flex;\n                                display: -ms-flexbox;\n                                display: flex;\n                                position: absolute;\n                                width: 100%;\n                            }\n                        "
                        }}
                    />
                    <div className="css-3rng96">
                            <div className="style__NavItemContainer-sc-215432b3-2 csxJUh"></div>
                    </div>
                    <style data-emotion="css 1k18g96"/>
                    <div className="css-1k18g96">
                        <style data-emotion="css kjafn5"/>
                        <div className="css-kjafn5">
                            <style data-emotion="css 1vyvmu0"/>
                            <button type="button" className="chakra-button css-1vyvmu0">  
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="style__SearchIcon-sc-215432b3-3 jjACFC" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                    </svg>
                            </button>
                        </div>
                        <div className="css-kjafn5">
                            <style data-emotion="css pdl12e"/>
                            <div className="css-pdl12e">
                                    <style data-emotion="css f0aika"/>
                                    <button type="button" className="chakra-button css-f0aika">
                                        <svg width="21" height="21" fill="var(--colors-primary)" xmlns="http://www.w3.org/2000/svg" className="text-[1.12rem] mr-[0.45rem]">
                                            <path d="m20.364 1.216-6.086 18.267a.861.861 0 0 1-.706.577h-.112a.86.86 0 0 1-.723-.396l-2.84-4.468a.861.861 0 1 1 1.454-.921l1.868 2.961L18.186 2.31 3.276 7.276l2.936 1.868a.861.861 0 0 1-.921 1.455L.823 7.767a.86.86 0 0 1 .19-1.54L19.28.13a.86.86 0 0 1 .86.207.862.862 0 0 1 .224.878Zm-6.886 5.82a.86.86 0 0 0-1.214 0L6.178 13.12a.86.86 0 0 0 0 1.214.86.86 0 0 0 1.213 0l6.087-6.086a.86.86 0 0 0-.018-1.214h.018Z"></path>
                                        </svg>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="style__DisplayOnLargeDown-sc-648aa1a0-0 gsNOIp">
                <div className="style__NavContainer-sc-125058e8-2 dzMLez">
                    <div className="style__Container-sc-6fdcc87e-0 style__NavMenuTopBar-sc-125058e8-3 iTWzCH cidDlP">
                        <a href="/">
                            <div className="style__LogoContainer-sc-1a7bd5c6-0 hOLYSe">
                                <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                    <img alt="Morning Brew Logo" sizes="100vw" src="/images/image.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain object-left m-auto p-0 border-[none] inset-0"/>
                                </span>
                            </div>
                        </a>
                        <button class="dist__DefaultButton-sc-630f0a6f-3 dist__UnstyledButton-1-sc-630f0a6f-6 gcxLyl cqdtIY style__MenuButton-sc-8d9dc58b-1 hxDzBp">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <main className="style__MainWrapper-sc-7673406-1 jJkycH">
            <div className="style__Container-sc-6fdcc87e-0 iTWzCH">
                <div className="style__FullViewportWidthContainer-sc-6fdcc87e-1 beAldL">
 
                <div data-slug="daily" data-vertical="daily" className="style__BookmarkletData-sc-fd7e820f-1 hVwikm"></div>
                    <div className="style__KPIBannerContainer-sc-2a5839c1-0 jdZcjQ">
                        <div className="style__FullWidthContainer-sc-2a5839c1-1 huYVK css-0">
                            <div className="style__StyledContainer-sc-2a5839c1-2 imMgqj css-0">
                                
                                <SumbitFormTop />
                            
                            </div>
                        </div>
                        <style data-emotion="css 1qwj5yi"/>
                        <div className="css-1qwj5yi">
                            <style data-emotion="css 1j8oszi"/>
                                <a className="chakra-link css-1j8oszi" href="https://www.morningbrew.com/daily/stories/2023/11/15/climate-change-is-expensive">
                                    <div className="style__SpotlightImage-sc-11272830-1 eiCAYT css-0">
                                        <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 relative m-0 p-0 border-0 bg-none">
                                            <span className="box-border block w-[initial] h-[initial] opacity-100 m-0 pt-[52.142857142857146%] p-0 border-0 bg-none"></span>
                                                <img alt="4 stacks of hundred dollar bills standing vertically with smoke coming out of the tops like smoke stacks" src="/images/climate cahnge.webp" decoding="async" data-nimg="responsive" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>


                                                <noscript>
                                                    <img alt="4 stacks of hundred dollar bills standing vertically with smoke coming out of the tops like smoke stacks" src="/public/images/climate cahnge.webp" decoding="async" data-nimg="responsive" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                </noscript>
                                            </span>
                                    </div>
                                    <p className="dist__StyledText-sc-630f0a6f-12 bhMDEK font-[bold] style__SpotlightTagLine-sc-11272830-2 iERVoj">Climate Change</p>
                                    <p className="dist__StyledText-sc-630f0a6f-12 hVVQdP font-[medium] style__SpotlightTitle-sc-11272830-3 cSAGwA">Climate change is expensive</p>
                                    <p className="dist__StyledText-sc-630f0a6f-12 bSTuQa fontr-[normal] style__SpotlightDetails-sc-11272830-4 enGwAp">The US has suffered 25 $1+ billion climate disasters so far this year.</p>
                                    <div className="style__SpotlightSponsor-sc-11272830-5 cBQIlA">
                                        <p className="dist__StyledText-sc-630f0a6f-12 font-[bold] gyYyqC"></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <style data-emotion="css 10qsrqw"/>
                        <a className="chakra-link css-10qsrqw" href="/daily/issues/latest">
                            <div className="style__FullViewportWidthContainer-sc-6fdcc87e-1 style__LatestIssuesContainer-sc-3420d880-0 beAldL gTohMX">
                                <style data-emotion="css 16t85jb"/>

                                
                                <div className="css-16t85jb">
                                    <style data-emotion="css hbu7g5"/>
                                    <div className="css-hbu7g5">
                                        <style data-emotion="css k008qs"/>
                                        <div className="css-k008qs">
                                            <span className="box-border inline-block overflow-hidden w-[initial] h-[initial] opacity-100 relative max-w-full m-0 p-0 border-0 bg-none">
                                                <span className="w-[initialheight:initial] opacity-100 max-w-full m-0 p-0 border-0 bg-none">
                                                    <img className="block max-w-full w-[initial] h-[initial] opacity-100 m-0 p-0 border-0 bg-none" alt="true" src=""/>
                                                </span>
                                                <img alt="phone icon" src="/images/phone.svg" decoding="async" data-nimg="intrinsic" className='absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto p-0 border-[none] inset-0'/>
                                                <noscript>
                                                    <img alt="phone icon" srcSet="/images/phone.svg 1x, /images/phone.svg 2x" src="/images/phone.svg" decoding="async" data-nimg="intrinsic" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                </noscript>
                                            </span>
                                        </div>
                                        <h1 className="dist__StyledText-sc-630f0a6f-12 font-black kHMoXM">LATEST NEWSLETTER:</h1>
                                    </div>
                                    <style data-emotion="css 1vkgzhu"/>


                                    <div className="css-1vkgzhu">
                                    <h6 className="dist__StyledText-sc-630f0a6f-12 bfhpGW font-medium">How much climate change costs the US...</h6>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="style__LayoutContainer-sc-47acaf1e-0 edgXlR">
                        <section className="style__HeroContainer-sc-1e07ced1-0 efVYFi">
                            <div className="css-0">
                                <a href="/daily/stories/2023/11/14/sf-plays-host-to-high-stakes-us-china-schmoozing" className="css-0">
                                    <article className="style__LargeToutArticle-sc-87e58a9d-0 iRLKii">
                                        <div className="style__IssueImageWrapper-sc-87e58a9d-2 irFyPB">
                                            <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                <img alt='' src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                <noscript>
                                                    <img alt="" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F03d5955ba2392fbeb8c77fe6dcdb4f1a4e15d24a-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                </noscript>
                                            </span>
                                        </div>
                                        <div className="css-0">
                                            <p className="dist__StyledText-sc-630f0a6f-12 dUwOAN style__Tagline-sc-87e58a9d-3 XpJRv font-medium ">International Politics</p>
                                            <h5 className="dist__StyledText-sc-630f0a6f-12 dZcHsi style__Title-sc-87e58a9d-6 hsVGwo">SF plays host to high-stakes US–China schmoozing</h5>
                                            <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-87e58a9d-7 gfFFub">Biden and Xi Jinping are meeting for the first time in a year to try to thaw the relationship.</p>
                                            <p className="dist__StyledText-sc-630f0a6f-12 fGqCjg style__Author-sc-87e58a9d-4 esNZPy">Sam Klebanov</p>
                                        </div>
                                    </article>
                                </a>
                            </div>
                            <div className="css-0">
                                <div className="css-0">
                                    <article className="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                        <a href="/daily/stories/bankers-smaller-bonuses-for-second-year-in-a-row" className="css-0">
              


                                        <div direction="imageRight" className="style__Body-sc-17ce5760-3 fANYDf">
                                                <div direction="imageRight" className="style__BodyDetails-sc-17ce5760-8 fRwMqG">
                                                    <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium ">Finance</p>
                                                    <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium ">Bankers could see smaller bonuses for the second year in a row</h6>
                                                    <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB">Bonuses often account for a huge share of bankers’ total compensation.</p>
                                                    <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium ">Matty Merritt
                                                    
                                                    </p>
                                                </div>
                                                <div className="css-0">
                                                    <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                        <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                            <img alt='' src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                            <noscript>
                                                                <img alt="" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4a001e0368e61693019bcc54afab2af4c90a5d08-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                            </noscript>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="css-0">
                                    <article className="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                        <a href="/daily/stories/2023/11/14/who-s-buying-a-house-in-this-economy" className="css-0">
                                            <div direction="imageRight" className="style__Body-sc-17ce5760-3 fANYDf">
                                                <div direction="imageRight" className="style__BodyDetails-sc-17ce5760-8 fRwMqG">
                                                    <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium">Homebuying</p>
                                                    <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium">Who’s buying a house in this economy?</h6>
                                                    <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB">Single women make up an increasing number of homebuyers.</p>
                                                    <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium">Cassandra Cassidy
                                                    
                                                    </p>
                                                </div>
                                                <div className="css-0">
                                                    <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                        <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                            <img alt='' src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                            <noscript>
                                                                <img 
                                                                    alt="" 
                                                                    sizes="100vw" 
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff878f7a0a85bcfd5f19b1356bbabf6479f1cb6d9-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75" 
                                                                    decoding="async" data-nimg="fill" 
                                                                    className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                            </noscript>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="css-0">
                                    <article className="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                        <a href="/daily/stories/2023/11/14/espn-enters-the-sports-betting-world" className="css-0">
                                            <div direction="imageRight" className="style__Body-sc-17ce5760-3 fANYDf">
                                                <div direction="imageRight" className="style__BodyDetails-sc-17ce5760-8 fRwMqG">
                                                    <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium">Sports</p>
                                                    <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium">ESPN enters the sports betting world</h6>
                                                    <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB">The network wants to be your bookie.</p>
                                                    <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium">Dave Lozo
                                                    
                                                    </p>
                                                </div>
                                                <div className="css-0">
                                                    <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                        <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                            <img alt='' src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>


                                                            <noscript>
                                                                <img alt="" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Ff4e512636115a0c3eabc0efc1dde2c72d94351c2-1500x1000.png%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" 
                                                                    className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                            </noscript>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <div className="style__GridContainer-sc-47acaf1e-1 hflwCX">
                            <div className="css-0">
                                <style data-emotion="css j7qwjs"/>
                                <div className="css-j7qwjs">
                                    <style data-emotion="css 1gfyl13"/>
                                        <div className="css-1gfyl13">
                                        <h4 className="dist__StyledText-sc-630f0a6f-12 kWJCTR font-bold">Latest Stories</h4>
                                        <a target="_self" href="/search" className="dist__StyledLink-sc-630f0a6f-52 FzSMt">
                                            <style data-emotion="css 1081t4c"/>
                                            <a href="/search" class="css-1081t4c">All Stories</a>
                                        </a>
                                    </div>
                                    <div className="style__LatestStoriesGrid-sc-925a9421-1 eUNIDm">
                                        <style data-emotion="css 1h8288t"/>
                                        <div className="css-1h8288t">
                                            <article className="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                                <a href="/daily/stories/2023/11/15/climate-change-is-expensive" className="css-0">
                                                    <div direction="imageLeft" className="style__Body-sc-17ce5760-3 eaXrro">
                                                        <div direction="imageLeft" className="style__BodyDetails-sc-17ce5760-8 iwtaNu">
                                                            <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium">Climate Change</p>
                                                            <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium">Climate change is expensive</h6>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB"></p>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium">Cassandra Cassidy
                                                            
                                                            | 11.15.2023</p>
                                                        </div>
                                                        <div className="css-0">
                                                            <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                                <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                                    <img alt="Graphic of US dollar bills in the shape of smoke stacks" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                                    <noscript>
                                                                        <img alt="Graphic of US dollar bills in the shape of smoke stacks" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2Fd53b5234a3c1fd09a4097558d2740f0baec50820-1500x1000.jpg%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                                    </noscript>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                        <div className="css-1h8288t">
                                            <article className="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                                <a href="/daily/stories/2023/11/13/us-colleges-welcomed-a-rush-of-students-from-india" className="css-0">
                                                    <div direction="imageLeft" className="style__Body-sc-17ce5760-3 eaXrro">
                                                        <div direction="imageLeft" className="style__BodyDetails-sc-17ce5760-8 iwtaNu">
                                                            <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium">Education</p>
                                                            <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium">US colleges welcomed a rush of students from India </h6>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB"></p>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium">Sam Klebanov
                                                            
                                                            | 11.14.2023</p>
                                                        </div>


                                                        <div className="css-0">
                                                            <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                                <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                                    <img alt="College campus" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0 absolute"/>
                                                                    <noscript>
                                                                        <img alt="College campus" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F3eb45aeaafecb16636439b7d6465f1dc5f773916-4000x2548.jpg%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0;" loading="lazy"/>
                                                                    </noscript>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                        <div className="css-1h8288t">
                                            <article className="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                                <a href="/daily/stories/2023/11/12/humane-hopes-its-pin-will-eventually-replace-your-iphone" className="css-0">
                                                    <div direction="imageLeft" className="style__Body-sc-17ce5760-3 eaXrro">
                                                        <div direction="imageLeft" className="style__BodyDetails-sc-17ce5760-8 iwtaNu">
                                                            <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium">Tech</p>
                                                            <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium">Humane hopes its pin will eventually replace your iPhone</h6>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB"></p>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium">Dave Lozo
                                                            
                                                            | 11.12.2023</p>
                                                        </div>
                                                        <div className="css-0">
                                                            <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                                <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                                    <img alt="Humane&#x27;s AI pin" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                                    <noscript>
                                                                        <img alt="Humane&#x27;s AI pin" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F8859af0c67c8ef1819677a2675c0086f206aa408-2000x1428.jpg%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                                    </noscript>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                        <div className="css-1h8288t">
                                            <article class="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                                <a href="/daily/stories/2023/11/12/tipping-culture-is-leaving-americans-confused" className="css-0">
                                                    <div direction="imageLeft" className="style__Body-sc-17ce5760-3 eaXrro">
                                                        <div direction="imageLeft" className="style__BodyDetails-sc-17ce5760-8 iwtaNu">
                                                            <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium">Retail</p>
                                                            <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium">Tipping culture is leaving Americans confused</h6>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB"></p>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium">Dave Lozo
                                                            
                                                            | 11.12.2023</p>
                                                        </div>
                                                        <div className="css-0">
                                                            <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                                <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                                    <img alt="Bill Belichick mad after game" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                                    <noscript>
                                                                        <img alt="Bill Belichick mad after game" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fstorage.morningbrew.com%2Fgif%2F2023-11-12%2Fimage-af4e3da0709a82acacc0368bea77c3d516abb12b-750x422-gif%2Fgiphy(22)-min.webp&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                                    </noscript>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                        <div className="css-1h8288t">
                                            <article className="style__SmallToutArticle-sc-17ce5760-0 jpUaem">
                                                <a href="/daily/stories/2023/11/10/ai-generated-images-come-to-advertising" className="css-0">
                                                    <div direction="imageLeft" className="style__Body-sc-17ce5760-3 eaXrro">
                                                        <div direction="imageLeft" className="style__BodyDetails-sc-17ce5760-8 iwtaNu">
                                                            <p className="dist__StyledText-sc-630f0a6f-12 bUBhWt style__Tagline-sc-17ce5760-4 kiHkZj font-medium">Marketing</p>
                                                            <h6 className="dist__StyledText-sc-630f0a6f-12 gtikwD style__Title-sc-17ce5760-5 fohViQ font-medium">AI-generated images come to advertising</h6>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 djCKmk style__Description-sc-17ce5760-6 dFUoLB"></p>
                                                            <p className="dist__StyledText-sc-630f0a6f-12 kMktnu style__Author-sc-17ce5760-7 jaGNfS font-medium">Dave Lozo
                                                            
                                                            | 11.11.2023</p>
                                                        </div>
                                                        <div className="css-0">
                                                            <div className="style__ImageWrapper-sc-17ce5760-1 kwDodE">
                                                                <span className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0">
                                                                    <img alt="A still of an advertisement from Blade Runner 2049." src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                                    <noscript>
                                                                        <img alt="A still of an advertisement from Blade Runner 2049." sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F79b981835ca2d3e2bf3f5c7d2abe0d05830a1b10-800x450.png%3Fq%3D80%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                                    </noscript>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="css-0">
                                <div className="style__FlexibleGridSection-sc-beacc3b7-0 fuxLfC">
                                    <h4 className="dist__StyledText-sc-630f0a6f-12 cYPolD style__FlexibleGridSectionTitle-sc-beacc3b7-1 eXlzjA font-bold">Latest Podcast Episodes</h4>
                                    <div className="style__FlexibleGridContent-sc-beacc3b7-2 cBQMKD">


                                    <a href="https://www.youtube.com/watch?v=WqI5M6wgzcM">
                                            <div className="style__FlexibleGridItem-sc-beacc3b7-3 iTdrub">
                                                <div className="style__FlexibleGridImage-sc-beacc3b7-4 DvVIQ">
                                                    <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                        <img alt="Penn Entertainment logo on top of a football, a stack of hundred dollar bills and a phone with the ESPN logo on it next to the Morning Brew Daily podcast hosts and &quot;EPSN gets into betting&quot; text" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                        <noscript>
                                                            <img alt="Penn Entertainment logo on top of a football, a stack of hundred dollar bills and a phone with the ESPN logo on it next to the Morning Brew Daily podcast hosts and &quot;EPSN gets into betting&quot; text" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F788e6f158e738904a66a9289635d16c4c2c489b9-1280x720.jpg%3Fq%3D80&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                        </noscript>
                                                    </span>
                                                </div>
                                                <p className="dist__StyledText-sc-630f0a6f-12 iqCUJN font-medium">MORNING BREW DAILY</p>
                                                <h6 className="dist__StyledText-sc-630f0a6f-12 igkmNh font-medium">ESPN Gambles On $2 Billion Sportsbook Deal</h6>
                                                <p className="dist__StyledText-sc-630f0a6f-12 dZzunL font-regular">Neal and Toby break down ESPN &#x27;s launch into the wagering space with ESPN Bet on Tuesday. Plus, a new study was released revealing who buys homes and how much the typical buyer makes.</p>
                                            </div>
                                        </a>
                                        <a href="https://www.youtube.com/watch?v=TsdUJht4kEU">
                                            <div className="style__FlexibleGridItem-sc-beacc3b7-3 iTdrub">
                                                <div className="style__FlexibleGridImage-sc-beacc3b7-4 DvVIQ">
                                                    <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 absolute m-0 p-0 border-0 inset-0 bg-none">
                                                        <img alt="Founder&#x27;s Journal podcast host, Alex Lieberman, looking shocked next to humanoid robots in space with &quot;The future is here&quot; text" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0"/>
                                                        <noscript>
                                                            <img alt="Founder&#x27;s Journal podcast host, Alex Lieberman, looking shocked next to humanoid robots in space with &quot;The future is here&quot; text" sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbl383u0v%2Fproduction%2F4e8f79be779787b1c02292e0c7f6cf82ff7d4990-1280x720.png%3Fq%3D80&amp;w=3840&amp;q=75 3840w" src="/images/climate cahnge.webp" decoding="async" data-nimg="fill" className="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover m-auto p-0 border-[none] inset-0" loading="lazy"/>
                                                        </noscript>
                                                    </span>
                                                </div>
                                                <p className="dist__StyledText-sc-630f0a6f-12 iqCUJN font-medium">FOUNDER &#x27;S JOURNAL</p>
                                                <h6 className="dist__StyledText-sc-630f0a6f-12 igkmNh font-medium">These 3 Companies Sound like Sci-Fi But Are VERY REAL</h6>
                                                <p className="dist__StyledText-sc-630f0a6f-12 dZzunL font-regular">Technology is growing at a rapid pace. Alex Lieberman highlights three companies that are beyond imagination looking to solve real-world problems. From humanoid robots to controlling your dreams, these startups will have you thinking we’re living in a sci-fi movie.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <style data-emotion="css jn01mi"/>
                                <div className="css-jn01mi">
                                    <style data-emotion="css vdnlig"/>
                                        <p className="chakra-text css-vdnlig">Explore Topics</p>
                                    <style data-emotion="css 1ntfffp"/>
                                    <div className="css-1ntfffp">
                                        <a href="/tag/ai" className="TagTile-sc-98ed2fd0-0 ddpxfv">AI</a>
                                        <a href="/tag/business-news" className="TagTile-sc-98ed2fd0-0 ddpxfv">Business News</a>
                                        <a href="/tag/work" className="TagTile-sc-98ed2fd0-0 ddpxfv">Work</a>
                                        <a href="/tag/international-politics" className="TagTile-sc-98ed2fd0-0 ddpxfv">International Politics</a>
                                        <a href="/tag/transportation" className="TagTile-sc-98ed2fd0-0 ddpxfv">Transportation</a>
                                        <a href="/tag/travel" className="TagTile-sc-98ed2fd0-0 ddpxfv">Travel</a>
                                        <a href="/tag/tech" className="TagTile-sc-98ed2fd0-0 ddpxfv">Tech</a>
                                        <a href="/tag/real-estate" className="TagTile-sc-98ed2fd0-0 ddpxfv">Real estate</a>
                                        <a href="/tag/health" className="TagTile-sc-98ed2fd0-0 ddpxfv">Health</a>
                                        <a href="/tag/media" className="TagTile-sc-98ed2fd0-0 ddpxfv">Media</a>
                                    </div>
                                </div>
                                <section className="style__FollowUsSection-sc-cbfd4fe7-0 dqyWKA">
                                    <p className="chakra-text style__Title-sc-cbfd4fe7-1 escBEI css-vdnlig">Follow 
                                    Morning Brew</p>
                                    <style data-emotion="css 1htrmhk"/>
                                        

                                    <p className="chakra-text css-1htrmhk">Morning Brew delivers quick and insightful updates about the business world every day of the week from Wall St. to Silicon Valley.</p>
                                    <div className="style__Socials-sc-cbfd4fe7-2 cAtbWR">
                                        <div className="style__SocialIcon-sc-cbfd4fe7-3 hHVgRq">
                                            <a target="_blank" rel="noreferrer" href="https://twitter.com/MorningBrew">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="style__SocialIcon-sc-cbfd4fe7-3 hHVgRq">
                                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/the-morning-brew">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="style__SocialIcon-sc-cbfd4fe7-3 hHVgRq">
                                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/MorningBrew">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="style__SocialIcon-sc-cbfd4fe7-3 hHVgRq">
                                            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@morningbrew">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <title></title>
                                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="style__SocialIcon-sc-cbfd4fe7-3 hHVgRq">
                                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCqit4NtRDfdEHKX_zgmAwrg">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="style__SocialIcon-sc-cbfd4fe7-3 hHVgRq">
                                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/morningbrew">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="style__FullViewportWidthContainer-sc-6fdcc87e-1 style__Container-sc-a900d4a8-0 beAldL fUcta">
                            <div className="style__Container-sc-6fdcc87e-0 iTWzCH">
                               
                                <SubmitFormBottom />
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className="style__FooterWrapper-sc-7673406-2 hpEsRi">
            <div className="style__FullViewportWidthContainer-sc-6fdcc87e-1 styles__Container-sc-68d235a7-0 beAldL hhdcUb">
                <div className="style__Container-sc-6fdcc87e-0 iTWzCH">
                    <div className="styles__ColumnContainer-sc-68d235a7-1 lbZQgv">
                        <div className="styles__SocialsColumn-sc-68d235a7-5 kqoNeG">
                            <div className="styles__ColumnTitle-sc-68d235a7-8 etvZSR">
                                <p className="dist__StyledText-sc-630f0a6f-12 gqerFP">Follow Us</p>
                            </div>
                            <div className="styles__SocialsRow-sc-68d235a7-6 dVxymL">
                                <div className="styles__SocialIcon-sc-68d235a7-7 bwNVFt">
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/MorningBrew?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="styles__SocialIcon-sc-68d235a7-7 bwNVFt">
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/the-morning-brew?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="styles__SocialIcon-sc-68d235a7-7 bwNVFt">
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/MorningBrew?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="styles__SocialIcon-sc-68d235a7-7 bwNVFt">
                                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@morningbrew?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <title></title>
                                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="styles__SocialIcon-sc-68d235a7-7 bwNVFt">
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCqit4NtRDfdEHKX_zgmAwrg?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="styles__SocialIcon-sc-68d235a7-7 bwNVFt">
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/morningbrew?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="styles__FooterColumn-sc-68d235a7-2 jFwOGX">
                            <div className="styles__ColumnTitle-sc-68d235a7-8 etvZSR">
                                <p className="dist__StyledText-sc-630f0a6f-12 gqerFP">Brands</p>
                            </div>
                            <ul className="styles__LinksColumn-sc-68d235a7-3 styles__BrandsColumn-sc-68d235a7-4 fBzpOi ccxMDi">
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://morningbrew.com/daily/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Morning Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://www.morningbrew.com/money-with-katie/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Money with Katie</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://emergingtechbrew.com/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Tech Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://www.retailbrew.com/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Retail Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://marketingbrew.com/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Marketing Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://www.hr-brew.com/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">HR Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://www.itbrew.com/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">IT Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://www.cfobrew.com/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">CFO Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://healthcare-brew.com/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Healthcare Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://morningbrew.com/bossy-show/subscribe?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Bossy</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://www.mbdailyshow.com/?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Morning Brew Daily</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">


                                <a href="https://podcast.moneywithkatie.com/?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">The Money with Katie Show</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="https://foundersjournalpod.morningbrew.com/?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Founder &#x27;s Journal</a>
                                </li>
                            </ul>
                        </div>
                        <div className="styles__FooterColumn-sc-68d235a7-2 ifFvqE">
                            <div className="styles__ColumnTitle-sc-68d235a7-8 etvZSR">
                                <p className="dist__StyledText-sc-630f0a6f-12 gqerFP">Search</p>
                            </div>
                            <ul className="styles__LinksColumn-sc-68d235a7-3 fBzpOi">
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="/search" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Stories</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="/archive?v=daily" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Newsletter Issues</a>
                                </li>
                            </ul>
                        </div>
                        <div className="styles__FooterColumn-sc-68d235a7-2 ifFvqE">
                            <div className="styles__ColumnTitle-sc-68d235a7-8 etvZSR">
                                <p className="dist__StyledText-sc-630f0a6f-12 gqerFP">Brew</p>
                            </div>
                            <ul className="styles__LinksColumn-sc-68d235a7-3 fBzpOi">
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a target="_blank" rel="noreferrer" href="https://learning.morningbrew.com/?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Learning at Morning Brew</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a target="_blank" rel="noreferrer" href="https://shop.morningbrew.com?utm_source=mb_main_site&amp;utm_medium=website&amp;utm_campaign=main_site_top_nav?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Shop</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="/daily/about?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">About Us</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a target="_blank" rel="noreferrer" href="https://jobs.lever.co/morningbrew?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Careers</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a target="_blank" rel="noreferrer" href="https://morningbrewdaily.typeform.com/to/EFVlafWE?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Advertise with Us</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="/faq?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">FAQ</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="/privacy?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Privacy</a>
                                </li>
                                <li class="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="/terms-service?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Terms of Service</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href="/privacy?utm_medium=website&amp;utm_source=global_footer&amp;utm_campaign=mb" class="styles__FooterLink-sc-68d235a7-10 bsPhry">Do Not Sell / Share My Personal Information</a>
                                </li>
                                <li className="styles__ColumnItem-sc-68d235a7-9 dYgYOf">
                                    <a href='/' className="cursor:pointer">
                                        <a href='/' className="styles__FooterLink-sc-68d235a7-10 bsPhry">Cookie Preferences</a>
                                    </a>
                                </li>
                                <p className="dist__StyledText-sc-630f0a6f-12 ihWtTx">© 
                                2023
                                Morning Brew, Inc.</p>
                                <p className="dist__StyledText-sc-630f0a6f-12 coFKCP">All Rights Reserved.</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


                                    
                      


     Aba
    </div>
  )
}

export default Home
