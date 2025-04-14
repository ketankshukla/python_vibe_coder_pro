'use client'

import React from 'react'
import { useEffect } from 'react'

export default function ResumeContent() {
  // Add print styles when component mounts
  useEffect(() => {
    // Create a style element for print-specific styles
    const style = document.createElement('style');
    style.type = 'text/css';
    style.media = 'print';
    
    // Define print-specific CSS
    style.innerHTML = `
      @page {
        margin: 0.5in;
        size: portrait;
      }
      
      /* Hide browser-generated headers and footers */
      @media print {
        @page {
          margin: 0.5in;
          size: portrait;
        }
        
        /* Hide all website and browser UI elements */
        header, footer, nav, .header, .footer, .page-title-section, #__next > header, #__next > footer, .mb-auto > div > div:first-child {
          display: none !important;
        }
        
        /* Hide URL, date, page numbers */
        html {
          -webkit-print-color-adjust: exact;
        }
        
        /* Override browser defaults */
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        
        /* Adjust page breaks - keep skills on first page */
        .page-break-before:not(.technical-skills-section) {
          page-break-before: always !important;
        }
        
        /* Technical skills should not have a page break */
        .technical-skills-section {
          page-break-before: auto !important;
        }
        
        /* Prevent page breaks inside elements */
        .no-page-break {
          page-break-inside: avoid !important;
        }
        
        /* Hide the print button and other non-resume elements when printing */
        .print-button, header, footer, .page-title-section, .resume-page > div:first-child {
          display: none !important;
        }
        
        /* Ensure proper spacing in print */
        .resume-section {
          margin-bottom: 20px;
        }
        
        /* Ensure each project is on its own page */
        .project-item {
          page-break-before: always !important;
        }
        
        /* First project doesn't need a page break */
        .project-item:first-child {
          page-break-before: auto !important;
        }
        
        /* Make sure the projects section title stays with the first project */
        .projects-title {
          page-break-after: avoid !important;
        }
      }
      .print-button, header, footer, .page-title-section, .resume-page > div:first-child {
        display: none !important;
      }
      
      /* Ensure proper spacing in print */
      .resume-section {
        margin-bottom: 20px;
      }
      
      /* Ensure each project is on its own page */
      .project-item {
        page-break-before: always !important;
      }
      
      /* First project doesn't need a page break */
      .project-item:first-child {
        page-break-before: auto !important;
      }
      
      /* Make sure the projects section title stays with the first project */
      .projects-title {
        page-break-after: avoid !important;
      }
    `;
    
    // Add the style element to the document head
    document.head.appendChild(style);
    
    // Clean up when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#306998] to-[#FFD43B] p-1 rounded-lg shadow-lg header-content">
        <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-md">
          <div className="text-center md:text-left md:flex md:justify-between md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#306998] dark:text-[#FFD43B]">KETAN SHUKLA</h2>
              <h3 className="text-lg sm:text-xl font-medium mt-1 text-gray-700 dark:text-gray-300">Python ETL Developer</h3>
            </div>
            <div className="mt-4 md:mt-0 text-gray-600 dark:text-gray-400 contact-info">
              <p>San Diego, CA</p>
              <p>
                <a href="mailto:resume@ketankshukla.com" className="text-[#306998] dark:text-[#FFD43B] hover:underline break-all">
                  resume@ketankshukla.com
                </a>
              </p>
              <p>619-669-8545</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a 
                  href="https://linkedin.com/in/ketankshukla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#306998] dark:text-[#FFD43B] hover:text-[#FFD43B] dark:hover:text-[#306998] transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/ketankshukla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#306998] dark:text-[#FFD43B] hover:text-[#FFD43B] dark:hover:text-[#306998] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-[#306998] dark:border-[#FFD43B] professional-summary">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#306998] dark:text-[#FFD43B]">PROFESSIONAL SUMMARY</h3>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Python ETL Developer focused on data processing, automation, and API development. Some experience in building ETL pipelines, 
          designing database integrations, and implementing data validation systems through a portfolio of 2 practical projects. 
          Some experience with Python libraries for data manipulation, web scraping, and database operations with a strong commitment 
          to data accuracy and quality. Seeking an entry-level ETL Developer position to leverage technical expertise and passion 
          for data engineering in solving complex business problems.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-[#306998] dark:border-[#FFD43B] technical-skills-section resume-section no-page-break">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#306998] dark:text-[#FFD43B]">TECHNICAL SKILLS</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Data Engineering & ETL */}
          <div className="skill-category">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">Data Engineering & ETL</h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Data Processing: Pandas, NumPy, Data Transformation, Data Cleaning</li>
              <li>Data Validation: Error Handling, Data Quality Checks, Schema Validation</li>
            </ul>
          </div>

          {/* Data Integration */}
          <div className="skill-category">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">Data Integration</h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Web Scraping: Requests</li>
              <li>API Integration: RESTful APIs, API Authentication</li>
              <li>Document Processing: PyPDF2, JSON/XML Parsing, regex</li>
            </ul>
          </div>

          {/* Database Technologies */}
          <div className="skill-category">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">Database Technologies</h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>SQL: SQLite</li>
            </ul>
          </div>

          {/* Development & Tools */}
          <div className="skill-category">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">Development & Tools</h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Version Control: Git, GitHub</li>
              <li>Development Environment: Jupyter Notebook, VS Code</li>
              <li>Testing: pytest, unittest</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-[#306998] dark:border-[#FFD43B] projects-section resume-section">
        <h3 className="text-2xl font-bold mb-6 text-[#306998] dark:text-[#FFD43B] projects-title">PROJECTS</h3>
        
        <div className="space-y-8">
          {/* Financial Market ETL Pipeline */}
          <div className="project-item no-page-break">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Financial Market ETL Pipeline</h4>
              <a 
                href="https://github.com/ketankshukla/financial_market_etl" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#306998] dark:text-[#FFD43B] hover:underline text-sm md:text-base mt-1 md:mt-0"
              >
                github.com/ketankshukla/financial_market_etl
              </a>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Designed and implemented a comprehensive ETL pipeline for processing financial market data from multiple sources (CSV, JSON, REST APIs)</li>
              <li>Engineered data transformation components that calculate advanced financial metrics including RSI, MACD, and Bollinger Bands with 99% accuracy</li>
              <li>Created a flexible orchestration system using a task-based architecture with dependency management for reliable pipeline execution</li>
              <li>Developed a robust validation framework to ensure data consistency and completeness across all processing stages</li>
              <li>Implemented both database and CSV export capabilities with configurable retention policies for optimized storage</li>
              <li>Built a command-line interface with comprehensive logging for monitoring pipeline execution and troubleshooting</li>
              <li className="font-medium mt-2">Tech Stack: Python, Pandas, NumPy, SQLAlchemy, Requests, BeautifulSoup4</li>
            </ul>
          </div>

          {/* COVID-19 Data Integration ETL Pipeline */}
          <div className="project-item no-page-break">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">COVID-19 Data Integration ETL Pipeline</h4>
              <a 
                href="https://github.com/ketankshukla/covid19_etl" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#306998] dark:text-[#FFD43B] hover:underline text-sm md:text-base mt-1 md:mt-0"
              >
                github.com/ketankshukla/covid19_etl
              </a>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Engineered a comprehensive Python ETL pipeline that extracts COVID-19 data from multiple sources including CSV files, JSON data, REST APIs, and web scraping</li>
              <li>Implemented data transformation modules with standardization for dates, locations, and missing values, ensuring 100% data consistency across disparate sources</li>
              <li>Designed a flexible orchestration system with task scheduling and dependency management for reliable pipeline execution</li>
              <li>Created robust data validation checks using Great Expectations to ensure data quality and integrity throughout the pipeline</li>
              <li>Developed a unified data loading system that writes to SQLite database with configurable export options to CSV</li>
              <li>Built a mock API server for local testing, enabling development without relying on external services</li>
              <li>Implemented detailed logging and error handling to facilitate troubleshooting and pipeline monitoring</li>
              <li className="font-medium mt-2">Tech Stack: Python, Pandas, SQLAlchemy, NumPy, Requests, BeautifulSoup4, Great Expectations</li>
            </ul>
          </div>

          {/* Data Warehouse ETL Framework */}
          <div className="project-item no-page-break">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Data Warehouse ETL Framework</h4>
              <a 
                href="https://github.com/ketankshukla/data-warehouse-etl" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#306998] dark:text-[#FFD43B] hover:underline text-sm md:text-base mt-1 md:mt-0"
              >
                github.com/ketankshukla/data-warehouse-etl
              </a>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Engineered a modular ETL framework for transferring data from multiple source systems to a central data warehouse</li>
              <li>Implemented configurable extractors for various data sources including CSV, JSON, XML, and SQL databases</li>
              <li>Developed transformation pipelines with comprehensive data cleaning, normalization, and validation steps</li>
              <li>Created a metadata-driven approach for dynamically generating table schemas and tracking data lineage</li>
              <li>Built a robust error handling system with transaction support to ensure data integrity during loading</li>
              <li className="font-medium mt-2">Tech Stack: Python, Pandas, SQLAlchemy, PyYAML, psycopg2</li>
            </ul>
          </div>

          {/* Log Analysis & Monitoring System */}
          <div className="project-item no-page-break">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Log Analysis & Monitoring System</h4>
              <a 
                href="https://github.com/ketankshukla/log_analysis_system" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#306998] dark:text-[#FFD43B] hover:underline text-sm md:text-base mt-1 md:mt-0"
              >
                github.com/ketankshukla/log_analysis_system
              </a>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Developed a Python-based log analysis system that processes server logs, extracts performance metrics, and identifies potential security threats</li>
              <li>Implemented regex pattern matching to extract structured data from unstructured logs with 97% accuracy</li>
              <li>Created an anomaly detection algorithm using statistical methods to identify unusual patterns in server response times</li>
              <li>Built a notification system using SMTP for alerting on critical issues and performance degradations</li>
              <li>Designed a data retention policy with automatic archiving of processed logs to optimize storage usage</li>
              <li className="font-medium mt-2">Tech Stack: Python, regex, Pandas, SQLite, smtplib</li>
            </ul>
          </div>

          {/* E-commerce Sales ETL Pipeline */}
          <div className="project-item no-page-break">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">E-commerce Sales ETL Pipeline</h4>
              <a 
                href="https://github.com/ketankshukla/ecommerce_etl" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#306998] dark:text-[#FFD43B] hover:underline text-sm md:text-base mt-1 md:mt-0"
              >
                github.com/ketankshukla/ecommerce_etl
              </a>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Developed a comprehensive data pipeline for extracting, transforming, and loading e-commerce sales data from multiple platforms and formats</li>
              <li>Implemented versatile extractors supporting diverse data sources including CSV, JSON, Excel, PDF, SQL databases, XML, FTP/SFTP, and email content</li>
              <li>Created transformation modules to calculate key business metrics including sales trends, customer lifetime value, and inventory turnover</li>
              <li>Designed a flexible orchestration system with task scheduling and dependency management for reliable pipeline execution</li>
              <li>Built robust data validation components to ensure consistency and completeness across all processing stages</li>
              <li>Developed configurable data loaders for database integration and multi-format exports</li>
              <li>Implemented automated report generation capabilities for business intelligence and analysis</li>
              <li className="font-medium mt-2">Tech Stack: Python, Pandas, SQLAlchemy, lxml, PyPDF, smtplib, paramiko</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-[#306998] dark:border-[#FFD43B] education-section resume-section no-page-break">
        <h3 className="text-2xl font-bold mb-4 text-[#306998] dark:text-[#FFD43B]">EDUCATION</h3>
        
        <div className="education-item">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">San Diego City College</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
            <li>Certificate in Python Development (Completed)</li>
            <li>Certificate in Data Science (Expected June 2025)</li>
            <li>Core Focus: Python for Data Science, Database Management, Data Visualization</li>
          </ul>
        </div>
      </div>

      {/* Print Resume Button */}
      <div className="flex justify-center mt-8 print-button">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            // Use a more advanced print function that attempts to control print settings
            const printWindow = () => {
              // Create a hidden iframe to control print settings
              const iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              document.body.appendChild(iframe);
              
              // Get the iframe's document with null check
              const contentWindow = iframe.contentWindow;
              if (!contentWindow) {
                console.error('Could not access iframe content window');
                return;
              }
              const iframeDoc = contentWindow.document;
              
              // Copy the current document's content to the iframe
              iframeDoc.open();
              iframeDoc.write('<html><head><title>ketan_shukla_python_ETL_resume</title>');
              
              // Add print-specific styles directly in the iframe
              iframeDoc.write(`
                <style>
                  @page { 
                    margin: 0.5in; 
                    size: portrait;
                  }
                  body { 
                    margin: 0; 
                    padding: 0;
                    font-family: Arial, Helvetica, sans-serif;
                    line-height: 1.5;
                    color: #333;
                  }
                  /* Hide any potential headers/footers */
                  header, footer { 
                    display: none !important; 
                  }
                  /* Remove boxes for print */
                  .bg-white, .bg-gray-900, .dark\\:bg-gray-900 {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0 !important;
                    padding: 0 !important;
                  }
                  /* Remove border-left accents */
                  .border-l-4, .dark\\:border-l-4 {
                    border-left: none !important;
                  }
                  /* Larger font sizes for better readability */
                  h2 {
                    font-size: 48px !important;
                    margin-bottom: 10px !important;
                    color: #000 !important;
                  }
                  h3 {
                    font-size: 32px !important;
                    margin-bottom: 16px !important;
                    color: #306998 !important;
                  }
                  h4 {
                    font-size: 28px !important;
                    margin-bottom: 10px !important;
                    color: #000 !important;
                  }
                  p, li {
                    font-size: 22px !important;
                    line-height: 1.5 !important;
                    color: #333 !important;
                  }
                  /* Reduce spacing between sections */
                  .resume-section {
                    margin-bottom: 10px !important;
                  }
                  
                  /* Make professional summary more compact */
                  .professional-summary {
                    margin-bottom: 10px !important;
                  }
                  
                  .professional-summary p {
                    font-size: 22px !important;
                    line-height: 1.5 !important;
                    margin-bottom: 0 !important;
                  }
                  
                  .professional-summary h3 {
                    font-size: 32px !important;
                    margin-bottom: 10px !important;
                  }
                  /* Improve contact info layout */
                  .contact-info {
                    margin-bottom: 10px !important;
                  }
                  /* Better list formatting - fix bullet points */
                  ul {
                    padding-left: 40px !important;
                    margin-bottom: 16px !important;
                    list-style-position: outside !important;
                  }
                  li {
                    margin-bottom: 3px !important;
                  }
                  /* Better spacing for projects */
                  .project-item {
                    margin-bottom: 20px !important;
                    page-break-before: always !important;
                  }
                  /* First project doesn't need a page break */
                  .project-item:first-child {
                    page-break-before: auto !important;
                  }
                  /* Remove gradients */
                  .bg-gradient-to-r {
                    background: none !important;
                    padding: 0 !important;
                  }
                  /* Centralized header formatting - more compact */
                  .header-content {
                    border-bottom: 1px solid #ccc !important;
                    padding-bottom: 10px !important;
                    margin-bottom: 15px !important;
                    text-align: center !important;
                  }
                  
                  /* Format header content properly */
                  .header-content .bg-white {
                    padding: 0 !important;
                    margin: 0 !important;
                  }
                  
                  /* Center header layout */
                  .header-content .text-center.md\\:text-left.md\\:flex.md\\:justify-between.md\\:items-center {
                    display: block !important;
                    text-align: center !important;
                  }
                  
                  /* Format name and title - larger */
                  .header-content h2 {
                    font-size: 48px !important;
                    margin-bottom: 5px !important;
                    color: #306998 !important;
                    font-weight: bold !important;
                    text-align: center !important;
                  }
                  
                  .header-content h3 {
                    font-size: 36px !important;
                    margin-bottom: 16px !important;
                    color: #333 !important;
                    text-align: center !important;
                  }
                  
                  /* Format contact info - more compact */
                  .contact-info {
                    text-align: center !important;
                    margin-top: 3px !important;
                  }
                  
                  .contact-info p {
                    margin: 0 0 4px 0 !important;
                    line-height: 1.4 !important;
                    text-align: center !important;
                    font-size: 22px !important;
                  }
                  
                  .contact-info a {
                    color: #306998 !important;
                    text-decoration: none !important;
                    font-size: 22px !important;
                  }
                  
                  /* Format the social links */
                  .contact-info div {
                    display: flex !important;
                    justify-content: center !important;
                    margin-top: 8px !important;
                  }
                  
                  /* Increase GitHub link font sizes */
                  a[href*="github"] {
                    font-size: 22px !important;
                    color: #306998 !important;
                    text-decoration: none !important;
                  }
                  
                  /* Technical skills section - no page break */
                  .technical-skills-section {
                    page-break-before: auto !important;
                    margin-top: 10px !important;
                  }
                  
                  /* Make skills more compact */
                  .skill-category h4 {
                    margin-bottom: 3px !important;
                  }
                  
                  /* Projects section should start on a new page */
                  .projects-section {
                    page-break-before: always !important;
                  }
                  
                  /* Education section should be on its own page */
                  .education-section {
                    page-break-before: always !important;
                  }
                  
                  /* Remove graphical elements from non-header sections */
                  .resume-section .bg-white, 
                  .resume-section .dark\\:bg-gray-900, 
                  .resume-section .bg-gray-900, 
                  .resume-section .rounded-lg, 
                  .resume-section .rounded-md, 
                  .resume-section .shadow-lg, 
                  .resume-section .shadow-md, 
                  .resume-section .p-1, 
                  .resume-section .p-6 {
                    background: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    border-radius: 0 !important;
                    padding: 0 !important;
                    margin: 0 !important;
                  }
                  
                  /* Clean spacing for sections */
                  .space-y-10 > *:not(.header-content) {
                    margin-top: 0 !important;
                    margin-bottom: 20px !important;
                  }
                  
                  /* Remove any dividers */
                  hr, .divide-y, .divide-gray-200, .dark\\:divide-gray-700 {
                    display: none !important;
                    border: none !important;
                    height: 0 !important;
                  }
                </style>
              `);
              
              // Copy all styles from the main document
              Array.from(document.getElementsByTagName('style')).forEach(style => {
                iframeDoc.write(style.outerHTML);
              });
              Array.from(document.getElementsByTagName('link')).forEach(link => {
                if (link.rel === 'stylesheet') {
                  iframeDoc.write(link.outerHTML);
                }
              });
              
              iframeDoc.write('</head><body>');
              
              // Only copy the resume content, not the website header/footer
              const resumeContent = document.querySelector('.resume-container');
              if (resumeContent) {
                iframeDoc.write(resumeContent.innerHTML);
              }
              
              iframeDoc.write('</body></html>');
              iframeDoc.close();
              
              // Wait for styles to load
              setTimeout(() => {
                // Print with specific settings
                if (iframe.contentWindow) {
                  iframe.contentWindow.focus();
                  iframe.contentWindow.print();
                }
                
                // Remove the iframe after printing
                setTimeout(() => {
                  document.body.removeChild(iframe);
                }, 1000);
              }, 500);
            };
            
            printWindow();
          }}
          className="px-6 py-3 bg-gradient-to-r from-[#306998] to-[#FFD43B] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Print Resume
        </a>
      </div>
    </div>
  )
}
