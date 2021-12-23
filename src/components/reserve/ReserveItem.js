import {Link} from "react-router-dom";

const ReserveItem = (props) => {

    const path = "/review/"+props.shopId
    return (
        <div>
            <p>예약 번호 : {props.id}</p>
            <p>예약 인원 : {props.reserveNumberOfPeople}</p>
            <p>예약 시간 : {props.reserveDateTime}</p>
            <p>음식점 번호 : {props.shopId}</p>
            <p>음식점 이름 : {props.shopName}</p>
            <p>음식점 평점 : {props.shopGrade}</p>
            <p>음식점 분류 : {props.shopPart}</p>
            <p>사용자 번호 : {props.userId}</p>
            <Link to={path}>리뷰 작성</Link>
            <br/>

        </div>
    )
}

export default ReserveItem;