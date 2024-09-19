import './Hello.css'
export default function Hello({firstname,lastname="Ngamsinchamras",age=20}){
    return (<><h1>Hello Wolrd {firstname}{lastname}{age} </h1></>);
}
