import Sidebar from "../../components/sidebar";
import CourseCard from "../../components/course-card";
import { supabase } from "../../lib/supabase";

export default async function CoursesPage() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white flex overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <Sidebar />

      <section className="relative z-10 flex-1 p-6 md:p-10">

        <h1 className="text-5xl font-bold mb-8">
          Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={Number(course.progress || 0)}
              icon_name={course.icon_name}
            />
          ))}

        </div>

      </section>

    </main>
  );
}