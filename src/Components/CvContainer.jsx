import { useState } from "react";
import CvBody from "./CvBody";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CvContainer = (props) => {
    const [display, setDisplay] = useState({
        display: "none"
    })
    const viewCv = () => {
        const styling = {
            display: "block"
        }
        setDisplay(styling);
    }
    const handleDownloadClick = () => {
        const input = document.getElementById('cv-body');
        html2canvas(input)
          .then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save(`CV_${props.user.person.fname}${props.user.person.lname}.pdf`);
        });
      }
    return (
        <div className="cv-container">
            <div className="preview-btn">
                <button className="btn" onClick={viewCv}>View Cv</button>
            </div>
            <CvBody info={props.user} showCv={display} />
            <div className="download-btn" style={display}>
                <button className="btn" onClick={handleDownloadClick}>Download PDF</button>
            </div>
        </div>
    )
}
export default CvContainer;