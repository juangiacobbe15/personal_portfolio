import { Link } from 'react-router-dom';

export default function ViewMoreBtn(props) {
    return (
        <>
            <Link to={props.path} className='btn'>{props.value}</Link>
        </>
    );
}