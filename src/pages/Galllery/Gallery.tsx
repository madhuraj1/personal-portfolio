import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getGalleryQuery } from '../../schema/Query';
import { Spinner } from '../../components/Spinner';
import { GalleryImageCollection } from '../../types/pages/Gallery.types';
import { Helmet } from 'react-helmet';

export const Gallery = () => {
  const [rowData, setRowData] = useState<Array<Array<string>> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');

  const { loading, data } = useQuery<GalleryImageCollection>(getGalleryQuery, {
    variables: { id: '6hNEIBo2R4cfkgoHQW5iyf' },
    onCompleted: (res) => {
      const screenWidth = window.innerWidth;

      let noOfCols = 3;

      if (screenWidth > 1100) {
        getGalleryRows(3);
        noOfCols = 3;
      } else if (screenWidth > 600) {
        getGalleryRows(2);
        noOfCols = 2;
      } else {
        getGalleryRows(1);
        noOfCols = 1;
      }

      function getGalleryRows(rowSize: number) {
        const columnsArray: Array<Array<string>> = Array.from(
          { length: rowSize },
          () => []
        );
        res.galleryCollection.items[0].imagedForGalleryCollection.items.forEach(
          (item, l) => {
            const columnIndex = Math.floor(
              l /
                Math.ceil(
                  res.galleryCollection.items[0].imagedForGalleryCollection
                    .items.length / rowSize
                )
            );
            columnsArray[columnIndex].push(item.url);
          }
        );

        setRowData(columnsArray);
      }
    },
  });

  // Function to adjust columns based on screen width

  // useEffect(() => {
  //   const adjustColumns = () => {
  //     if (window.innerWidth >= 900) {
  //       setColumns(3);
  //     } else if (window.innerWidth >= 600) {
  //       setColumns(2);
  //     } else {
  //       setColumns(1);
  //     }
  //   };
  //   // Set initial columns
  //   adjustColumns();

  //   // Adjust columns on window resize
  //   window.addEventListener('resize', adjustColumns);

  //   // Cleanup event listener on unmount
  //   return () => {
  //     window.removeEventListener('resize', adjustColumns);
  //   };
  // }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Helmet>
        <title>Photos - Celebration Chapters</title>
        <meta property="og:title" content="Photos - Celebration Chapters" />
        <meta
          property="og:description"
          content="Explore our stunning photo gallery. Capturing your precious moments with beauty and precision."
        />
        <meta
          property="og:url"
          content="https://www.celebrationchapters.com/photos"
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/waibrswxyq0p/3RdXYtqHGWLEGox3EM7fLQ/50aa517250d9da1819f6c43f9bea7a1f/CCP-343.jpg"
        />
        <meta
          property="og:image:alt"
          content="A collection of professional photos by Celebration Chapters"
        />
      </Helmet>
      <div className="gallery">
        <div className={'flex flex-row'}>
          <div className={'flex flex-col px-4'}>
            <h1 className="py-4 text-left font-metropolis text-5xl">
              Memories
            </h1>
            <div className="pb-8 text-justify font-century">
              {data?.galleryCollection.items[0].introduction}
            </div>
          </div>
        </div>

        <div className="gallery__wrapper">
          {rowData?.map((i, index) => {
            return (
              <div key={i[index]} className="gallery__row">
                {i.map((itm) => {
                  return (
                    <img
                      onClick={() => {
                        setUrl(itm);
                        setIsOpen(true);
                      }}
                      src={itm}
                      alt={itm}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
          <img
            src={url}
            alt=""
            className="aspect-auto h-full w-5/6 object-contain"
          />
          <div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute right-0 top-0 z-50 p-4 text-white"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};
