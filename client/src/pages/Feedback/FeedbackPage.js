import { Button, Textarea } from 'flowbite-react';
function FeedbackPage() {
  return (
    <div className="pt-40 flex justify-center">
      <div className="px-10 py-4 border border-gray-200 bg-orange-200 rounded-xl ">
        <p className="text-xl py-4">Describle your feedback:</p>
        <Textarea className="w-96 h-52" />
        <div className="flex justify-center">
          <Button size={'sm'} className="w-20 mt-4 ">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
