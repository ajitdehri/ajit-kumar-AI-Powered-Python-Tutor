const Assignments = () => {
    const tasks = [
      { question: "Print 'Hello, World!'", answer: "print('Hello, World!')" },
      { question: "Define a function named greet()", answer: "def greet():\n    print('Hello!')" },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center">Python Challenges</h2>
        <ul className="mt-4 space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded">
              <p>{task.question}</p>
              <pre className="mt-2 p-2 bg-gray-200 rounded">{task.answer}</pre>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Assignments;
  