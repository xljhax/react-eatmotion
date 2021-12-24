import {useEffect, useState} from "react";
import ShopItem from "./ShopItem";
import ReviewList from "../review/ReviewList";
import {Link} from "react-router-dom";
import NewReviewForm from "../review/NewReviewForm";
import classes from "./ShopInfo.module.css"
import Loading from "../ui/Loading";

const ShopInfo = ({match}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedReviews, setLoadedReviews] = useState([]);
    const [loadedShop, setLoadedShop] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/shop/${match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {

                console.log(data)
                setIsLoading(false);
                setLoadedShop(data);

            })
        fetch(`/api/reviews/${match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {

                console.log(data)
                setIsLoading(false);
                setLoadedReviews(data);

            })
    }, []);

    let image = ""
    if (loadedShop.foodClassific === "한식") {
        image = "https://sat02pap001files.storage.live.com/y4muBNjjLV1S3srkmpKb_LXzKnCSonTbnAqrMUmLicnPpJtp2FaVZMEPQikOt4o0U6BJPdi5SEMOVbhQ0-EsdH13YLInGXS25HSR0APXAJMQFS4zJd1LraGsvEQMcnIfer0zU-H-21rPgEstrNYxArRZiGxt6e_pyAjkVTCvBKGuxBENQMQkTxpPva1-cMUgDdR7gdCI8cW-jaGJRFCRRChOw/%ED%95%9C%EC%8B%9D.jpg?psid=1&width=1087&height=815"
    } else if (loadedShop.foodClassific === "패스트푸드") {
        image = "https://sat02pap001files.storage.live.com/y4mzspFMZ1zyhTrrY2JEShm9V9Q8R2yzrfeMaLiOw0rc0rl11M9XdaKDyAPAeeaqT8JFMCUMkVgwS8PF3ghgzgF6O1CjRhG06ameXLBwmyspi5X13YbxCdgdEAzLMkQlRpBP4IV_ARGHqTzFRzXgzOtTqzA61yjA-ebRL-pGHMlF7RyqxNSheQqB-mPmJ_GmHKKGjCAt6L6qYwBe31ABJbf3A/%ED%8C%A8%EC%8A%A4%ED%8A%B8%ED%91%B8%EB%93%9C.jpg?psid=1&width=1087&height=815"
    } else if (loadedShop.foodClassific === "호프(소주방)") {
        image = "https://sat02pap001files.storage.live.com/y4m326YYnCVrrZasi-IZFT6jgkdOIL8nIDhicEi1Z5dSKBqOTTUOPhS5O4RCNNsgiDTlqfOp8jalqGOKam62ZqbIZ7PtzjCQOrreIF5eMcZZkIm0ZwuGy_ZuTMhpzcSIYiMb9Yd1hH4OYSBeZYAdTZdC3ADz0xpI1gc0CvGdd7jusHZlrHVW9Jm_4OtUvcsDIJZEgy4MxnLot8U-H0k40CAWQ/%ED%98%B8%ED%94%84(%EC%86%8C%EC%A3%BC%EB%B0%A9).jpeg?psid=1&width=1040&height=585"
    }

    // **
    else if (loadedShop.foodClassific === "안식식육판매점") {
        image = "https://sat02pap001files.storage.live.com/y4m3JseL2CIedHYYVHS1JJBLD3QSf6HNgso3pcNZKgtvNVaQvynRHhkgqMAenVmnOHoA3tII8FD5LBzFHU7lTAQJnel8qMWZOXic5FuIeetrI4lcdsQ6qjIJEN_733J22S9X01W8YyBrK5vf2ipdTRinGZ7QhttTxTwOmcIaaqebWhnutNHSYNXyNMr6YR_W6l1o0Ij-yYPmkR_0CyrJIXMTQ/%EC%95%88%EC%8B%AC%EC%8B%9D%EC%9C%A1%ED%8C%90%EB%A7%A4%EC%A0%90.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "외국음식전문점(인도)") {
        image = "https://sat02pap001files.storage.live.com/y4mMW12HWN5FhamukngjeMfIORQ-3hsMJ4eropdmjjGPZdZEu33UgI4TWGIfk9RgR7LRsSGFxPxjwmda-29dd76Fu0EGRYvgI9FOaWt7tknNnFBarJUPo_IKXWQizGcbYTUgtEK_YIvy1SxcZf5URVO5F9qorvSQBUlzJVNPQt_tUoNoLbeE9DCjoSYazmbTheAQOoq3Vx8L0pFAcD5Ve52Nw/%EC%99%B8%EA%B5%AD%EC%9D%8C%EC%8B%9D%EC%A0%84%EB%AC%B8%EC%A0%90(%EC%9D%B8%EB%8F%84).jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "외국음식전문점(태국등)") {
        image = "https://sat02pap001files.storage.live.com/y4me27UZHGshuQ-FOTela0JUgsDKg9tNy6wU4DRyFJFub_7ATl18vf_ef1t-GK6Qez-0XtXbess4QQM2yQqlnwMRda84xKPR_-b1L63n0D9CeIeNZbYR4uohnB6Y4Ky5quOt-BI5q4MrKdOFaznAOs5ndG8K_1Oy5A2SGUjkOuBl8RbXkes3ZFm0__Gem8RcUCkfc7N_xNeLpxBDZTwaa8JaA/%EC%99%B8%EA%B5%AD%EC%9D%8C%EC%8B%9D%EC%A0%84%EB%AC%B8%EC%A0%90(%ED%83%9C%EA%B5%AD%EB%93%B1).jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "일식") {
        image = "https://sat02pap001files.storage.live.com/y4m8RN5BK5M6Oz5N-j6S5SB0AZh3QNpqTWLX50_qmbaWZGRsm7GReU5OV3x2X2RT9_rbWPZpBmsqWOtC5mcwxO8ukhnWKFohsS879I7K9QguIQyGkV5CsAaXD3RVxJxgl1ounod6I6JkHMjev6Tp9kNLh0iUe__MA58PKtr2lT8ZiwnzI-TvXMqF0_fJD3b0uR3BwuqmTzBJLpdBXuThF-mJQ/%EC%9D%BC%EC%8B%9D.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "전통찻집") {
        image = "https://sat02pap001files.storage.live.com/y4mLHduSGbXf4DK9w0MCYK70L3a8ZE-ObwAS91RAtiPILjVnkez6nyXRMRguDDQ7UlJ3A4mkk-1IhZ1kOF2-uAaVWLZx0cZvRNMsPe-U95GFwcEc2dLhPkbdiT1WPgwfK_eD1AJxYCG0bcqZvXek4tZxPpY6cVidXEv7cAxe3c0idQ-o5vus6RA1h79jprewfhMkux2E-l0uxdt6IInW0IS_A/%EC%A0%84%ED%86%B5%EC%B0%BB%EC%A7%91.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "정종대포집(선술집)") {
        image = "https://sat02pap001files.storage.live.com/y4minQfitbvhep-ZvMLbBXh4rDYaqEYkZvhLcsIixKabgP8-GO3vmN0-ev1claBKc3qshvkrg59nYICt7q9jpwlLFqlTM7Wy88d2ZSq66LgfJFDDKVp3jJyYB2thLYNIb75rf9hgol0f0mSE4KjhaHvBrRX-Ofll5YtBS9pTEZzUNiWsQnT3o0ojXK0s-bIjrY2_6RJcCwIeeMFmF73x8SZrQ/%EC%A0%95%EC%A2%85%EB%8C%80%ED%8F%AC%EC%A7%91(%EC%84%A0%EC%88%A0%EC%A7%91).jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "제과점영업") {
        image = "https://sat02pap001files.storage.live.com/y4mLOZZIEEz5A-8PDxUiyvq6RQl4DfS2o8Hwmz79bzR0IAmj9RuNMbon-y9hUPTJv9kqm0pbrUAlujebIto0gHwzkIK88-cyCYzy3hWRu3mGjdOyv8y_WhohXln1z8UyT9znPOAItADvpVe6kXIfAMn5eKuiK7nu7Y5ldvJhGO55t0HcIAJDmOhpqg8zHRO8v1hecXovPm2W5tW4wz7oS__OA/%EC%A0%9C%EA%B3%BC%EC%A0%90%EC%98%81%EC%97%85.jpg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "중국식") {
        image = "https://sat02pap001files.storage.live.com/y4mmHf7m72QCkyKQIyRC92-HMVl6pHEYWcrr5zkyzQK9DknGBNR0vInxgD3B7sDOO_VeLDVBilWutxuY8vUAXlPA8_b5jaNhzGuGj9ziI3nPYiolUGEKG97AAUgel98aHVASWg4E_7CvHXcVOOQmyMi16n1n7IZ5gJP9G4YY-Lg_0q4azdkg4EcSiEUOk7GswCEN5R98tC2v4NnhObAHbD6OQ/%EC%A4%91%EA%B5%AD%EC%8B%9D.jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "출장조리") {
        image = "https://sat02pap001files.storage.live.com/y4mWl3aTvCwqXudFBHYBwhI294qAYlL5y8s1pU2WAypRaJa1skp8O7qRBpUrkiar74M5GNidm1b29dLaB7c-JEv3dUPWctSGbarFm3yeubry_tS13Ix-AL5rUJ-Rk1L-fBIwP2cTYHpWAtGmbeQNdtIy4-gDngC3fWCfrQN35kmGHlH5vODW9_JGA-a3K7NrtUEqGLDtjDPiXb-N1aCl-dS1Q/%EC%B6%9C%EC%9E%A5%EC%A1%B0%EB%A6%AC.jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "카페") {
        image = "https://sat02pap001files.storage.live.com/y4mu3LLviG1hGMzOhWZvdJEWiIOeQjp_GfKv9zlKRH2xThwckGY1D6ebjSRIJEPzrafM-IKgcTe4dh5oyL1VFvf_on9_JJkZ5-NDNtstwWZIsNQFGSIDzI9bm0cTOoD4PLYTxyHfQrr6b9kD-SX8tvk3TLAxN0tMD7z2Qb9-Zt5OPDGx8qhT_Q5q0RQZjh2IhPPCO6Ra3eIpGdmJH2_I5iKOw/%EC%B9%B4%ED%8E%98.jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "탕류") {
        image = "https://sat02pap001files.storage.live.com/y4mrsd3T3V2CiyWjItoOOCaNtELzxAq-0ofbgdXD4rlVRijFlHIaOj8OizayQNzD9CpQ1A9uXwsKO3PnzbRQNaWTrlAQR7JvotCI8-EWSs2VUPXqCddVYeb9YohZc7o1sSTGfyVcMaOibXqf6NUfP95YUSCFXz2XtQNZSItKV1q8Du4i2__Fjlh9ZDiEtATVy2KiTrAUNmwOZKXpcbHuZ7gxA/%ED%83%95%EB%A5%98.jpeg?psid=1&width=512&height=512&cropMode=center"
    } else if (loadedShop.foodClassific === "통닭(치킨)") {
        image = "https://sat02pap001files.storage.live.com/y4mOzc7kXkzUu6RWUGUWXwiypMxE9erOx_NuEDB-B9eBo_j0aEZpBoX_dNe4c8PtmKnocX-VX5Gc-g27CCFu6Q8V-BZomgbe7--P2w-nFbqLDsU4MpK-ux3Gp_EOyNPnH4OQeRsrBZ5Cmi-IzPUyfbJssaN_t-dWT4-lx-sPsdFhZu0B7C1jGuaJvS8ZZRthBLYI4LT-p29kNvto3XONXgILA/%ED%86%B5%EB%8B%AD(%EC%B9%98%ED%82%A8).jpg?psid=1&width=815&height=815&cropMode=center"
    }


    if (isLoading) {
        return (
            <section>
                <Loading/>
            </section>
        )
    }

    return (
        <div className={classes.shopinfo}>
            <Link to="/shop">
                <button className={classes.backbtn}>지도로 돌아가기</button>
            </Link>
            <div><img src={image} alt="음식점 이미지 여기" className={classes.shopimage}/></div>
            <div className={classes.shopinfohead}>
                <div className={classes.nametype}>
                    <h2 className={classes.shopname}>{loadedShop.name}</h2>
                    <div className={classes.classification}>{loadedShop.foodClassific}</div>
                </div>
                <h1 className={classes.rate}>{Math.round(loadedShop.grade)}</h1>
            </div>
            <br></br>
            <div className={classes.line}></div>
            <div className={classes.location}>찾아오는 길</div>
            <div className={classes.address}>{loadedShop.address}</div>
            <div className={classes.line}></div>
            <NewReviewForm id={loadedShop.id}></NewReviewForm>
            <div className={classes.line}></div>
            <h4 className={classes.reviewhead}>리뷰 보기</h4>
            <ReviewList reviews={loadedReviews}></ReviewList>

        </div>
    )
}

export default ShopInfo;