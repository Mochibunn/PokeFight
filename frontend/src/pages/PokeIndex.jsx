/* eslint-disable react/prop-types */
import BGImage from '../assets/images/PixelBG.png';
import { Tabs, Tab, CardBody } from "@nextui-org/react";
import { Card } from '@nextui-org/react';
import CardSection from '../components/CardSection';
import { useState } from 'react';
import CustomPagination from '../components/CustomPagination';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/Search';


export default function PokeIndex({ allEntries }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="w-full bg-cover bg-no-repeat relative aspect-video" style={{ backgroundImage: `url(${BGImage})` }}>
        <div className="flex w-full flex-col">
          <Tabs className='flex flex-col glassmorphism-input'>
            <Tab key="music" title="Pokeindex" >
              <div>
                <SearchBar type="text" placeholder="Search..." className='glassmorphism-input'/>
                {allEntries.length === 0 ? <div>Loading...</div> : (
                  <>
                    <CardSection
                      data={allEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                      component={PokemonCard} 
                    />
                    <CustomPagination
                      total={Math.ceil(allEntries.length / itemsPerPage)}
                      current={currentPage}
                      onChange={handlePageChange}
                    />
                  </>
                )}
              </div>
            </Tab>
            <Tab key="videos" title="Leader Score" className='bg-transparent flex flex-col glassmorphism-input'>
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
