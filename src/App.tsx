import ReviewList from "./components/ReviewList";

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Review Aggregator</h1>
      <ReviewList />
    </div>
  );
}

export default App;
