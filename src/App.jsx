import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Services from "./Services";
import CivilEngineer from "./CivilEngineer";
import PlanningEngineer from "./PlanningEngineer";
import PipingEngineer from "./PipingEngineer";
import RotatingEquipment from "./RotatingEquipment";
import SiteSupervisor from "./SiteSupervisor";
import Officers from "./Officers";
import ExecutiveSecretaries from "./ExecutiveSecretaries";
import DocumentsController from "./DocumentsController";
import ComputerProgrammers from "./ComputerProgrammers";
import Schedulers from "./Schedulers";
import MechanicalEngineer from "./MechanicalEngineer";
import ElectricalEngineer from "./ElectricalEngineer";
import QCInspector from "./QCInspector";
import ProjectSuperintendent from "./ProjectSuperintendent";
import SafetyEngineers from "./SafetyEngineers";
import AutoCADOperator from "./AutoCADOperator";
import Accountant from "./Accountant";
import ComputerOperator from "./ComputerOperator";
import ProjectControllers from "./ProjectControllers";
import Riggers from "./Riggers";
import Operators from "./Operators";
import SkilledLabours from "./SkilledLabours";
import SemiSkilledLabours from "./SemiSkilledLabours";
import WorkPermitReceiver from "./WorkPermitReceiver";
import Dashboard from "./Dashboard";
import ContactUs from "./ContactUs";
import Auth from "./Auth";
import Profile from "./Profile";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="content"
        >
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />

            {/* Services Routes */}
            <Route path="/services/civil-engineer" element={<CivilEngineer />} />
            <Route path="/services/planning-engineer" element={<PlanningEngineer />} />
            <Route path="/services/piping-engineer" element={<PipingEngineer />} />
            <Route path="/services/rotating-equipment" element={<RotatingEquipment />} />
            <Route path="/services/site-supervisor" element={<SiteSupervisor />} />
            <Route path="/services/officers" element={<Officers />} />
            <Route path="/services/executive-secretaries" element={<ExecutiveSecretaries />} />
            <Route path="/services/documents-controller" element={<DocumentsController />} />
            <Route path="/services/computer-programmers" element={<ComputerProgrammers />} />
            <Route path="/services/schedulers" element={<Schedulers />} />
            <Route path="/services/mechanical-engineer" element={<MechanicalEngineer />} />
            <Route path="/services/electrical-engineer" element={<ElectricalEngineer />} />
            <Route path="/services/qc-inspector" element={<QCInspector />} />
            <Route path="/services/project-superintendent" element={<ProjectSuperintendent />} />
            <Route path="/services/safety-engineers" element={<SafetyEngineers />} />
            <Route path="/services/auto-cad-operator" element={<AutoCADOperator />} />
            <Route path="/services/accountant" element={<Accountant />} />
            <Route path="/services/computer-operator" element={<ComputerOperator />} />
            <Route path="/services/project-controllers" element={<ProjectControllers />} />
            <Route path="/services/riggers" element={<Riggers />} />
            <Route path="/services/operators" element={<Operators />} />
            <Route path="/services/skilled-labours" element={<SkilledLabours />} />
            <Route path="/services/semi-skilled-labours" element={<SemiSkilledLabours />} />
            <Route path="/services/work-permit-receiver" element={<WorkPermitReceiver />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
