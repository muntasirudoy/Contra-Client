const reportWebVitals = onPerfEntry => {
    console.log(onPerfEntry);
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
            console.log(getTTFB(onPerfEntry));
        });
    }
};

export default reportWebVitals;