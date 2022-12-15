import { Button, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { createFeedback } from '../../components/API/Feedback';
function FeedbackPage() {
  const [content, setContent] = useState('');
  return (
    <div className="pt-40 flex justify-center">
      <div className="px-10  rounded-xl ">
        <p className="text-xl py-4">Describle your feedback:</p>
        <Textarea className="w-96 h-52" onChange={(e) => setContent(e.target.value)} />
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              createFeedback(sessionStorage.getItem('username'), content);
              alert('Send feedback successfully!');
            }}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-bold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
