import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


const Branches = () => {
    return (
       <div>
        <h1 className="text-5xl font-bold text-center">Our Branches</h1>
        <div className="lg:flex gap-10 justify-center">
            <Card className="mt-6 mx-auto lg:mx-0 w-96">
                <CardBody className="space-y-2">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    Elephant Road

                    </Typography>
                    <Typography>
                    13 no Shop Level# 13  Computer City Center,  New Elephant Road, Dhaka

                    </Typography>
                    <Typography className="flex">
                            <p className="font-bold">Phone: </p>
                            <p> 017465646546</p>
                    </Typography>
                    <Typography className="flex">
                            <p className="font-bold">Phone: </p>
                            <p> 017465646546</p>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardFooter>
            </Card>
            <Card className="mt-6 mx-auto lg:mx-0 w-96">
                <CardBody className="space-y-2">
                    
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    Uttara Branch
                    </Typography>
                    <Typography>
                    21, Sonargaon Janapath Road (Ground Floor). Sector#7, Uttara, Dhaka 1230
                    </Typography>
                    <Typography className="flex">
                            <p className="font-bold">Phone: </p>
                            <p> 017465646546</p>
                    </Typography>
                    <Typography className="flex">
                            <p className="font-bold">Phone: </p>
                            <p> 017465646546</p>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardFooter>
            </Card>
            <Card className="mt-6 mx-auto lg:mx-0 w-96">
                <CardBody className="space-y-2">
                    
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    Rampura Dhaka
                    </Typography>
                    <Typography>
                    Suite# 1311,1312, Level# 13 Computer City Center, New Elephant Road, Dhaka
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardFooter>
            </Card>
       </div>
       </div>
    );
};

export default Branches;