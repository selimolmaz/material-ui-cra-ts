import React, { Suspense, useContext, useEffect, useState } from "react";

import { DepartmentContext } from "../context/DepartmentContext";
import { Box, Typography } from "@mui/material";
import CourseService from "../services/CourseService";
import CourseDTO from "../models/CourseDTO";
import CourseStackView from "../components/course/CourseStackView";


const CourseContent: React.FC = () => {
    const { selectedDepartment } = useContext(DepartmentContext);
    const [courses, setCourses] = useState([] as CourseDTO[]);

    useEffect(() => {
        const courseService = new CourseService();
        courseService.getCourseByDeptName(selectedDepartment.deptName).then(data => {
            setCourses(data);
        });
    }, [selectedDepartment, setCourses]);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                    Courses of {selectedDepartment.deptName}
                </Typography>
                <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                    <CourseStackView courses={courses} />
                </Typography>
            </Suspense>
        </>
    );
}
export default CourseContent;