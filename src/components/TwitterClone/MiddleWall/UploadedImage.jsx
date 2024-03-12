
export default function UploadedImage(props){
    return(
    <div className="md:flex-shrink pr-6 pt-3">
        <img className="rounded-lg w-full h-64" src={props.uploadedImage} alt="Woman paying for a purchase" />
    </div>
    )
} 