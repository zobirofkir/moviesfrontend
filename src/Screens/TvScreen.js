import React, { useContext, useEffect, useState, useCallback } from 'react';
import { MovieContext } from '../hooks/MovieProvider';
import axios from 'axios';
import Modal from 'react-modal';

const TvScreen = () => {
    const { tv, setTv } = useContext(MovieContext);
    const [page, setPage] = useState(1);
    const [selectedTvShow, setSelectedTvShow] = useState(null);

    const fetchData = useCallback(async (page) => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/tv/${page}`);
        setTv(response.data.results);
    }, [setTv]);

    const fetchTvShowDetails = useCallback(async (tvId) => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/tv/${page}/${tvId}`);
        setSelectedTvShow(response.data);
    }, [page]);

    useEffect(() => {
        fetchData(page);
    }, [page, fetchData]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleShowDetails = (tvId) => {
        fetchTvShowDetails(tvId);
    };

    const closeModal = () => {
        setSelectedTvShow(null);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1038335302961000";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">TV Shows</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {tv.map((tvShow, index) => (
                        <div 
                            key={index} 
                            className="relative group cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => handleShowDetails(tvShow.id)}
                        >
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} 
                                alt={tvShow.original_name} 
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">{tvShow.original_name}</h2>
                                    <p className="text-gray-300">{tvShow.first_air_date}</p>
                                    <p className="text-gray-300">Rating: {tvShow.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between mt-10">
                    <button 
                        className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
                        onClick={handlePreviousPage}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <span className="text-white">Page {page}</span>
                    <button 
                        className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
                        onClick={handleNextPage}
                    >
                        Next
                    </button>
                </div>

                {/* AdSense Ad Unit */}
                <div className="my-8">
                    <ins className="adsbygoogle"
                         style={{ display: 'block' }}
                         data-ad-client="ca-pub-1038335302961000"
                         data-ad-slot="1234567890" // Replace with your actual ad slot ID
                         data-ad-format="auto"></ins>
                </div>
            </div>

            {/* Modal for TV Show Details */}
            {selectedTvShow && (
                <Modal
                    isOpen={!!selectedTvShow}
                    onRequestClose={closeModal}
                    contentLabel="TV Show Details"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
                >
                    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl">
                        <img 
                            src={`https://image.tmdb.org/t/p/original${selectedTvShow.backdrop_path}`} 
                            alt={selectedTvShow.original_name} 
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-3xl font-bold mb-4">{selectedTvShow.original_name}</h2>
                            <p className="mb-4">{selectedTvShow.overview}</p>
                            <p className="text-gray-400 mb-4">First Air Date: {selectedTvShow.first_air_date}</p>
                            <p className="text-gray-400 mb-4">Rating: {selectedTvShow.vote_average}</p>
                            <button 
                                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700" 
                                onClick={() => window.open(selectedTvShow.homepage, "_blank")}
                            >
                                Watch Now
                            </button>

                            <button 
                                className="mt-4 text-gray-300 hover:text-white underline mx-5"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default TvScreen;
