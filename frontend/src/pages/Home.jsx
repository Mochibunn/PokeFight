/* eslint-disable react/prop-types */
import CardSection from '../components/CardSection';

export default function Home({allEntries}){   

    return (
        <>
         <CardSection allEntries={allEntries}/>
        </>
    )
}