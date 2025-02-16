export const API_KEY='AIzaSyAcoJB_zO49MnZZItbFhYt_1oQFQ92I76c'
 
export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}