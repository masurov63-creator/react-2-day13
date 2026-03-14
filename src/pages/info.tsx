import { useParams, useNavigate } from "react-router-dom";
import { useTodo } from "../stores/todo";

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useTodo();

  const user = data.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="pt-28 text-center text-red-500 text-xl">
        User not found
      </div>
    );
  }

  return (
    <div className="pt-28 flex justify-center items-center">
      <div className="w-[420px] bg-white shadow-2xl rounded-2xl p-8 space-y-6">

        <h2 className="text-2xl font-bold text-center text-gray-700">
          User Information
        </h2>

        <div className="space-y-3 text-lg text-gray-600">
          <p>
            <span className="font-semibold text-gray-800">Name:</span> {user.name}
          </p>

          <p>
            <span className="font-semibold text-gray-800">Age:</span> {user.age}
          </p>

          <p
            className={`font-semibold ${
              user.status ? "text-green-500" : "text-red-500"
            }`}
          >
            Status: {user.status ? "Active" : "Inactive"}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default Info;