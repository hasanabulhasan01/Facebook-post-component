
    function CurrentDate() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
      return(
        <>{formattedDate}</>
      )
}

export default CurrentDate;