import {Component} from 'react';
import {MdEmojiFlags} from 'react-icons/md'

class ErrorBoundary extends Component {
 constructor(props) {
 super(props);
 this.state = { hasError: false };
 }
 static getDerivedStateFromError(error) {
 return { hasError: true }; 
 }
 
 render() {
 if (this.state.hasError) {
 return (
    <div className='w-full h-full flex gap-[5px] items-start pt-4 justify-center'>
    <h1 className='text-red-500  text-md lg:font-extrabold  lg:text-vl'>Oops! There's been an error.</h1>
    <MdEmojiFlags className='text-red-500  text-md lg:text-vl'/>
    </div>); 
 }
 return this.props.children; 
 }
}
export default ErrorBoundary