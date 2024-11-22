import React, { useState } from "react";
import Axios from "axios";

const CreateLearningPath = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contributor_id: 1, // Change this as per your implementation
  });
  const [modules, setModules] = useState([]);
  const [moduleData, setModuleData] = useState({
    title: "",
    description: "",
    resources: "",
  });
  const [learningPathId, setLearningPathId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModuleChange = (e) => {
    const { name, value } = e.target;
    setModuleData({ ...moduleData, [name]: value });
  };

  const handleSubmitLearningPath = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Create the learning path
      const response = await Axios.post("https://e-learn-ncux.onrender.com//api/learning_paths", formData);
      setLearningPathId(response.data.id);
      setSuccessMessage("Learning Path created successfully! You can now add modules.");
    } catch (error) {
      setErrorMessage("Failed to create Learning Path. Please try again.");
    }
  };

  const handleAddModule = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Add a module to the learning path
      const response = await Axios.post(`/api/learning_paths/${learningPathId}/modules`, {
        ...moduleData,
        learning_path_id: learningPathId,
      });
      setModules([...modules, response.data]);
      setModuleData({ title: "", description: "", resources: "" });
      setSuccessMessage("Module added successfully!");
    } catch (error) {
      setErrorMessage("Failed to add module. Please try again.");
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold text-center">Create Learning Path</h2>

      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

      {!learningPathId ? (
        <form onSubmit={handleSubmitLearningPath} className="mt-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg">Learning Path Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border rounded"
              placeholder="Enter Learning Path Title"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded"
              placeholder="Enter Learning Path Description"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Learning Path
          </button>
        </form>
      ) : (
        <>
          <h3 className="text-xl font-semibold mt-8">Add Modules to Learning Path</h3>
          <form onSubmit={handleAddModule} className="mt-6">
            <div className="mb-4">
              <label htmlFor="moduleTitle" className="block text-lg">Module Title</label>
              <input
                type="text"
                id="moduleTitle"
                name="title"
                value={moduleData.title}
                onChange={handleModuleChange}
                required
                className="w-full p-2 mt-2 border rounded"
                placeholder="Enter Module Title"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="moduleDescription" className="block text-lg">Description</label>
              <textarea
                id="moduleDescription"
                name="description"
                value={moduleData.description}
                onChange={handleModuleChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="Enter Module Description"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="resources" className="block text-lg">Resources</label>
              <input
                type="text"
                id="resources"
                name="resources"
                value={moduleData.resources}
                onChange={handleModuleChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="Enter Resource URL (if any)"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Module
            </button>
          </form>

          {/* Display added modules */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Modules Added</h3>
            {modules.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {modules.map((module, index) => (
                  <li key={index} className="p-2 border rounded">
                    <h4 className="font-bold">{module.title}</h4>
                    <p>{module.description}</p>
                    {module.resources && (
                      <a
                        href={module.resources}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {module.resources}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No modules added yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CreateLearningPath;
