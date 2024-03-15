import PropTypes from 'prop-types';
import DateComponent from './DateComponent'

FollowerComponent.propTypes = { 
    name:PropTypes.string.isRequired,
    profileImage:PropTypes.string.isRequired,
    userName:PropTypes.string.isRequired,
    publishDate:PropTypes.string.isRequired,
}

export default function FollowerComponent(props){
  return(
      <div className="flex flex-shrink-0 p-4 pb-0">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img className="inline-block h-10 w-10 rounded-full" src={props.profileImage}/>
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white">
              {props.name}
              <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @{props.userName} . <DateComponent publishDate={props.publishDate}/>
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}