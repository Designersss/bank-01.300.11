import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const userNow = useSelector((state: RootState) => state.user)
    return (
        <div>
            <p className='text-2xl mt-8'>{userNow.user ? userNow.user.name : 'Not found'}</p>
            <div className='flex'>
                <div className='px-32 mt-10 py-5 text-2xl bg-[#333333] rounded-xl shadow-[10px_12px_20px_-10px_rgba(132,155,105,.3)]'>
                    <div className='flex items-center justify-center'>
                        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.8375 28.8379H19.5475C17.22 28.8379 15.3125 26.8779 15.3125 24.4629C15.3125 23.7454 15.9075 23.1504 16.625 23.1504C17.3425 23.1504 17.9375 23.7454 17.9375 24.4629C17.9375 25.4254 18.655 26.2129 19.5475 26.2129H22.8375C23.52 26.2129 24.0625 25.6004 24.0625 24.8479C24.0625 23.9029 23.8 23.7629 23.205 23.5529L17.9375 21.7154C16.8175 21.3304 15.3125 20.5079 15.3125 17.9354C15.3125 15.7479 17.045 13.9454 19.1625 13.9454H22.4525C24.78 13.9454 26.6875 15.9054 26.6875 18.3204C26.6875 19.0379 26.0925 19.6329 25.375 19.6329C24.6575 19.6329 24.0625 19.0379 24.0625 18.3204C24.0625 17.3579 23.345 16.5704 22.4525 16.5704H19.1625C18.48 16.5704 17.9375 17.1829 17.9375 17.9354C17.9375 18.8804 18.2 19.0204 18.795 19.2304L24.0625 21.0679C25.1825 21.4529 26.6875 22.2754 26.6875 24.8479C26.6875 27.0529 24.955 28.8379 22.8375 28.8379Z" fill="#00AC4F"/>
                            <path d="M21 30.5875C20.2825 30.5875 19.6875 29.9925 19.6875 29.275V13.525C19.6875 12.8075 20.2825 12.2125 21 12.2125C21.7175 12.2125 22.3125 12.8075 22.3125 13.525V29.275C22.3125 29.9925 21.7175 30.5875 21 30.5875Z" fill="#00AC4F"/>
                            <path d="M21 40.2125C10.6225 40.2125 2.1875 31.7775 2.1875 21.4C2.1875 11.0225 10.6225 2.58749 21 2.58749C21.7175 2.58749 22.3125 3.18249 22.3125 3.89999C22.3125 4.61749 21.7175 5.21249 21 5.21249C12.075 5.21249 4.8125 12.475 4.8125 21.4C4.8125 30.325 12.075 37.5875 21 37.5875C29.925 37.5875 37.1875 30.325 37.1875 21.4C37.1875 20.6825 37.7825 20.0875 38.5 20.0875C39.2175 20.0875 39.8125 20.6825 39.8125 21.4C39.8125 31.7775 31.3775 40.2125 21 40.2125Z" fill="#00AC4F"/>
                            <path d="M36.75 13.9625H29.75C29.0325 13.9625 28.4375 13.3675 28.4375 12.65V5.64999C28.4375 4.93249 29.0325 4.33749 29.75 4.33749C30.4675 4.33749 31.0625 4.93249 31.0625 5.64999V11.3375H36.75C37.4675 11.3375 38.0625 11.9325 38.0625 12.65C38.0625 13.3675 37.4675 13.9625 36.75 13.9625Z" fill="#00AC4F"/>
                            <path d="M29.749 13.9632C29.4165 13.9632 29.084 13.8407 28.8215 13.5782C28.314 13.0707 28.314 12.2307 28.8215 11.7232L37.5715 2.97325C38.079 2.46575 38.919 2.46575 39.4265 2.97325C39.934 3.48075 39.934 4.32075 39.4265 4.82825L30.6765 13.5782C30.414 13.8407 30.0815 13.9632 29.749 13.9632Z" fill="#00AC4F"/>
                        </svg>
                        <p className='ml-3'>{userNow.user ? userNow.user.cash : '0'}</p>
                    </div>
                </div>
                <div className='px-32 mt-10 py-5 ml-8 text-2xl bg-[#333333] rounded-xl shadow-[10px_12px_20px_-10px_rgba(132,155,105,.3)]'>
                    <div className='flex items-center justify-center'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5471 39.8118C8.38215 39.8118 4.96972 36.7843 4.96972 33.0568V29.4868C4.96972 28.7693 5.56472 28.1743 6.28222 28.1743C6.99972 28.1743 7.59472 28.7693 7.59472 29.4868C7.59472 31.6743 9.71215 33.3193 12.5471 33.3193C15.3821 33.3193 17.4997 31.6743 17.4997 29.4868C17.4997 28.7693 18.0946 28.1743 18.8122 28.1743C19.5296 28.1743 20.1247 28.7693 20.1247 29.4868V33.0568C20.1247 36.7843 16.7296 39.8118 12.5471 39.8118ZM8.04963 34.7718C8.81963 36.2068 10.5521 37.1868 12.5471 37.1868C14.5421 37.1868 16.2747 36.1893 17.0447 34.7718C15.8022 35.5243 14.2621 35.9618 12.5471 35.9618C10.8321 35.9618 9.29213 35.5243 8.04963 34.7718Z" fill="#0F5FC2"/>
                            <path d="M12.5471 31.149C9.67715 31.149 7.1047 29.8365 5.8272 27.754C5.2672 26.844 4.96972 25.7765 4.96972 24.6915C4.96972 22.854 5.7747 21.139 7.2447 19.8615C10.0797 17.3765 14.9622 17.3766 17.8147 19.8441C19.2846 21.1391 20.1072 22.854 20.1072 24.6915C20.1072 25.7765 19.8096 26.844 19.2497 27.754C17.9896 29.8365 15.4171 31.149 12.5471 31.149ZM12.5471 20.5616C11.1821 20.5616 9.92218 21.0165 8.97718 21.839C8.08468 22.609 7.59472 23.624 7.59472 24.6915C7.59472 25.304 7.75215 25.8641 8.06715 26.3891C8.87215 27.7191 10.5871 28.5416 12.5471 28.5416C14.5071 28.5416 16.2221 27.7191 17.0096 26.4066C17.3246 25.8991 17.4822 25.3216 17.4822 24.7091C17.4822 23.6416 16.9922 22.6265 16.0997 21.839C15.1722 21.0165 13.9121 20.5616 12.5471 20.5616Z" fill="#0F5FC2"/>
                            <path d="M12.5471 35.9625C8.22465 35.9625 4.96972 33.18 4.96972 29.505V24.6925C4.96972 20.965 8.36465 17.9375 12.5471 17.9375C14.5246 17.9375 16.4147 18.62 17.8322 19.845C19.3022 21.14 20.1247 22.855 20.1247 24.6925V29.505C20.1247 33.18 16.8696 35.9625 12.5471 35.9625ZM12.5471 20.5625C9.81715 20.5625 7.59472 22.4175 7.59472 24.6925V29.505C7.59472 31.6925 9.71215 33.3375 12.5471 33.3375C15.3821 33.3375 17.4997 31.6925 17.4997 29.505V24.6925C17.4997 23.625 17.0097 22.61 16.1172 21.8225C15.1722 21.0175 13.9121 20.5625 12.5471 20.5625Z" fill="#0F5FC2"/>
                            <path d="M33.3198 25.9003C30.6773 25.9003 28.4373 23.9403 28.2273 21.4203C28.0873 19.9678 28.6123 18.5503 29.6623 17.5178C30.5373 16.6078 31.7798 16.1003 33.0923 16.1003H36.7498C38.4823 16.1528 39.8123 17.5178 39.8123 19.1978V22.8028C39.8123 24.4828 38.4823 25.8478 36.8023 25.9003H33.3198ZM36.6973 18.7253H33.1098C32.4973 18.7253 31.9373 18.9528 31.5348 19.3728C31.0273 19.8628 30.7823 20.5278 30.8523 21.1928C30.9398 22.3478 32.0598 23.2753 33.3198 23.2753H36.7498C36.9773 23.2753 37.1873 23.0653 37.1873 22.8028V19.1978C37.1873 18.9353 36.9773 18.7428 36.6973 18.7253Z" fill="#0F5FC2"/>
                            <path d="M28.0004 37.1875H23.6254C22.9079 37.1875 22.3129 36.5925 22.3129 35.875C22.3129 35.1575 22.9079 34.5625 23.6254 34.5625H28.0004C32.5154 34.5625 35.4379 31.64 35.4379 27.125V25.9H33.3204C30.6778 25.9 28.4379 23.94 28.2279 21.42C28.0879 19.9675 28.613 18.55 29.663 17.5175C30.538 16.6075 31.7804 16.1 33.0929 16.1H35.4204V14.875C35.4204 10.78 33.023 7.96246 29.138 7.50746C28.718 7.43746 28.3504 7.4375 27.9829 7.4375H12.2329C11.8129 7.4375 11.4104 7.47248 11.0079 7.52498C7.15788 8.01498 4.7954 10.815 4.7954 14.875V18.375C4.7954 19.0925 4.2004 19.6875 3.4829 19.6875C2.7654 19.6875 2.1704 19.0925 2.1704 18.375V14.875C2.1704 9.485 5.49547 5.58252 10.658 4.93502C11.1305 4.86502 11.6729 4.8125 12.2329 4.8125H27.9829C28.4029 4.8125 28.9454 4.83 29.5054 4.9175C34.6679 5.5125 38.0454 9.4325 38.0454 14.875V17.4125C38.0454 18.13 37.4504 18.725 36.7329 18.725H33.0929C32.4804 18.725 31.9205 18.9525 31.518 19.3725C31.0105 19.8625 30.7654 20.5275 30.8354 21.1925C30.9228 22.3475 32.043 23.275 33.303 23.275H36.7504C37.4679 23.275 38.0629 23.87 38.0629 24.5875V27.125C38.0629 33.145 34.0204 37.1875 28.0004 37.1875Z" fill="#0F5FC2"/>
                        </svg>
                        <p className='ml-3'>{userNow.user ? userNow.user.cash : '0'}</p>
                    </div>
                </div>
                <div className='px-32 mt-10 ml-8 py-5 text-2xl bg-[#333333] rounded-xl shadow-[10px_12px_20px_-10px_rgba(132,155,105,.3)]'>
                    <div className='flex items-center justify-center'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.875 15.1022C28.1575 15.1022 27.5625 14.5072 27.5625 13.7897V11.3747C27.5625 9.53717 26.775 7.75217 25.41 6.50967C24.0275 5.24967 22.2425 4.67217 20.3525 4.84717C17.2025 5.14467 14.4375 8.36467 14.4375 11.7247V13.4222C14.4375 14.1397 13.8425 14.7347 13.125 14.7347C12.4075 14.7347 11.8125 14.1397 11.8125 13.4222V11.7072C11.8125 6.99967 15.61 2.65967 20.1075 2.22217C22.7325 1.97717 25.2525 2.79967 27.1775 4.56717C29.085 6.29967 30.1875 8.78467 30.1875 11.3747V13.7897C30.1875 14.5072 29.5925 15.1022 28.875 15.1022Z" fill="#DA001A"/>
                            <path d="M26.2496 39.8125H15.7497C7.66468 39.8125 6.15968 36.05 5.77468 32.3925L4.46218 21.91C4.26968 20.02 4.19968 17.3075 6.03718 15.2775C7.61218 13.5275 10.2197 12.6875 13.9997 12.6875H27.9996C31.7971 12.6875 34.4046 13.545 35.9621 15.2775C37.7821 17.3075 37.7296 20.02 37.5371 21.875L36.2246 32.3925C35.8396 36.05 34.3346 39.8125 26.2496 39.8125ZM13.9997 15.3125C11.0422 15.3125 9.01218 15.89 7.97968 17.045C7.12218 17.99 6.84218 19.4425 7.06968 21.6125L8.38218 32.095C8.67968 34.895 9.44968 37.205 15.7497 37.205H26.2496C32.5496 37.205 33.3196 34.9125 33.6171 32.13L34.9296 21.6125C35.1571 19.4775 34.8771 18.025 34.0196 17.0625C32.9871 15.89 30.9571 15.3125 27.9996 15.3125H13.9997Z" fill="#DA001A"/>
                            <path d="M26.9853 23.0123C26.0053 23.0123 25.2178 22.2248 25.2178 21.2623C25.2178 20.2998 26.0053 19.5123 26.9678 19.5123C27.9303 19.5123 28.7178 20.2998 28.7178 21.2623C28.7178 22.2248 27.9478 23.0123 26.9853 23.0123Z" fill="#DA001A"/>
                            <path d="M14.7353 23.0123C13.7553 23.0123 12.9678 22.2248 12.9678 21.2623C12.9678 20.2998 13.7553 19.5123 14.7178 19.5123C15.6803 19.5123 16.4678 20.2998 16.4678 21.2623C16.4678 22.2248 15.6978 23.0123 14.7353 23.0123Z" fill="#DA001A"/>
                        </svg>
                        <p className='ml-3'>{userNow.user ? userNow.user.cash : '0'}</p>
                    </div>
                </div>
            </div>
            <div className='p-5 mt-10 w-full h-32 bg-[#333333] rounded-xl shadow-[10px_12px_20px_-10px_rgba(132,155,105,.3)]'>
            </div>
        </div>
    );
};

export default Home;