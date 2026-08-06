import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pipelineData = [
    {
        id: 1,
        type: 'Project',
        title: 'Graphene Transistor Simulation Sponsored By لعصبة',
        status: 'In Progress',
        date: 'Oct 2026',
        description: 'Modeling electron mobility in 2D materials and analyzing heat dissipation at the nanoscale.',
    },
    {
        id: 2,
        type: 'Event',
        title: 'Nanoscale Hackathon 2026',
        status: 'Upcoming',
        date: 'Nov 15, 2026',
        description: 'A 48-hour challenge where members build and render complex molecular structures.',
    },
    {
        id: 3,
        type: 'Project',
        title: 'RSP Web Infrastructure',
        status: 'Completed',
        date: 'Aug 20pipelines-page26',
        description: 'Building a modern, highly interactive 3D platform for our community using React and Three.js.',
    },
    {
        id: 4,
        type: 'Event',
        title: 'Intro to VESTA Workshop',
        status: 'Finished',
        date: 'Sep 10, 2026',
        description: 'A comprehensive hands-on session on visualizing and analyzing crystal structures.',
    }
];

export default function Pipelines() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Project', 'Event'];

    const filteredData = activeFilter === 'All'
        ? pipelineData
        : pipelineData.filter(item => item.type === activeFilter);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="page "
        >
            <section className='hero' style={{paddingBottom: "40px", paddingTop: "150px"}}>

                {/* 1. Header Section */}
                <div className="container">
                    <div className="section-tag">&mdash; OUR PIPELINES</div>
                    <h1 className="hero-title">
                        Innovation <span className='highlight-text'>Tracks</span>
                    </h1>
                    <h3 className='research-hero-subtitle'>
                        From atomic scale concepts to macroscopic impact
                    </h3>
                    <p className="hero-desc">
                        Explore our ongoing research projects, development tracks, and upcoming scientific events. We turn theoretical concepts into tangible reality.
                    </p>
                </div>

                {/* 2. Filters Section */}
                <div className="pipelines-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        >
                            {filter}s
                        </button>
                    ))}
                </div>

                {/* 3. Grid Section - شلنا الـ motion.div ورجعناه div عادي عشان نمنع حركة الـ layout */}
                <div className="pipelines-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredData.map((item) => (
                            <motion.div
                                key={item.id}
                                // فايد إن وفايد أوت فقط (شفافية من 0 إلى 1)
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pipeline-card"
                            >

                                <div className="card-header">
                                    <span className={`card-tag ${item.type.toLowerCase()}`}>
                                        {item.type.toUpperCase()}
                                    </span>
                                    <span className="card-date">
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-desc">{item.description}</p>

                                <hr className="card-divider" />

                                <div className="card-status-wrapper">
                                    <div className={`status-dot ${item.status === 'Completed' || item.status === 'Finished' ? 'completed' : 'active'}`} />
                                    <span className="status-text">Status: <span>{item.status}</span></span>
                                </div>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

        </motion.div>
    );
}