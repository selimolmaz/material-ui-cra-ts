import React, { useEffect, useContext, Suspense } from "react";
import DepartmentService from "../services/DepartmentService";
import DepartmentCardView from "../components/department/DepartmentCardView";
import { DepartmentContext } from "../context/DepartmentContext";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


function DepartmentContent() {
    const { departments, setDepartments, setSelectedDepartment } = useContext(DepartmentContext);
    const departmentService = new DepartmentService();

    useEffect(() => {
        if (departments && departments.length > 0) {
          setSelectedDepartment(departments[0]);
          console.log("Selected department:", departments[0]);
        }
      }, [departments]);

    useEffect(() => {
        departmentService.getDepartments()
            .then(data => {
                setDepartments(data);
            })
            .catch(error => console.error("Error fetching departments:", error));
    }, [setDepartments]);

    return (
        <Box>
            <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
                Departments
            </Typography>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Swiper
                        spaceBetween={30}
                        style={{ padding: '20px' }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            200: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                    >
                        {departments.map((department, index) => (
                            <SwiperSlide key={index}>
                                <DepartmentCardView key={department.deptName} department={department} />
                            </SwiperSlide>))}
                    </Swiper>
                </Suspense>
            </Typography>
        </Box>
    );
}
export default DepartmentContent;