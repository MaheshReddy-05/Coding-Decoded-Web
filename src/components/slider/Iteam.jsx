import React from 'react';

export function TeamItem(probs){
  return (
    <div>
      <a href="https://www.linkedin.com/company/codingdecoded/" target="_blank">

      <div className="col-sm-6 col-md-4">
        <div className="team-item bg-[#f3f4f6] text-center mx-auto my-8 px-4 py-6 rounded transition-colors duration-250 ease-in-out hover:bg-blue-300 hover:text-white">
          <img
            src={probs.Im}
            className="team-img w-32 h-32 mx-auto rounded-full p-1 bg-gray-400"
            alt="pic"
          />
          <h3 className="text-lg font-semibold mt-4 mb-1 text-black">{probs.name}</h3>
          <div className="team-info">
            <p className="text-gray-600">{probs.role}</p>
          </div>
          <br />
          <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vero?
          </p>
          <button className='mt-5 py-2 px-4 bg-[#0a66c2] rounded-md text-white'>Connect </button>
        </div>
      </div>
      </a>

    </div>
  );
};

export default TeamItem;
