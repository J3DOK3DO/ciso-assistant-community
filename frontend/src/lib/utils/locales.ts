import { mitigate } from '$paraglide/messages/en';
import * as m from '../../paraglide/messages';

export const LOCALE_MAP = {
	en: {
		name: 'english',
		flag: '🇬🇧'
	},
	fr: {
		name: 'french',
		flag: '🇫🇷'
	}
};

export function toCamelCase(str: string) {
	str = str.charAt(0).toLowerCase() + str.slice(1);
	return str.replace(/[_-]\w/g, match => match.charAt(1).toUpperCase());
}

export function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

interface LocalItems {
	[key: string]: string;
}

export function localItems(languageTag: string): LocalItems {
	const LOCAL_ITEMS = {
		french: m.french({ languageTag: languageTag }),
		english: m.english({ languageTag: languageTag }),
		home: m.home({ languageTag: languageTag }),
		edit: m.edit({ languageTag: languageTag }),
		overview: m.overview({ languageTag: languageTag }),
		context: m.context({ languageTag: languageTag }),
		governance: m.governance({ languageTag: languageTag }),
		risk: m.risk({ languageTag: languageTag }),
		compliance: m.compliance({ languageTag: languageTag }),
		organization: m.organization({ languageTag: languageTag }),
		extra: m.extra({ languageTag: languageTag }),
		analytics: m.analytics({ languageTag: languageTag }),
		calendar: m.calendar({ languageTag: languageTag }),
		threats: m.threats({ languageTag: languageTag }),
		securityFunctions: m.securityFunctions({ languageTag: languageTag }),
		securityMeasures: m.securityMeasures({ languageTag: languageTag }),
		assets: m.assets({ languageTag: languageTag }),
		asset: m.asset({ languageTag: languageTag }),
		policies: m.policies({ languageTag: languageTag }),
		riskMatrices: m.riskMatrices({ languageTag: languageTag }),
		riskAssessments: m.riskAssessments({ languageTag: languageTag }),
		riskScenarios: m.riskScenarios({ languageTag: languageTag }),
		riskScenario: m.riskScenario({ languageTag: languageTag }),
		riskAcceptances: m.riskAcceptances({ languageTag: languageTag }),
		riskAcceptance: m.riskAcceptance({ languageTag: languageTag }),
		complianceAssessments: m.complianceAssessments({ languageTag: languageTag }),
		complianceAssessment: m.complianceAssessment({ languageTag: languageTag }),
		evidences: m.evidences({ languageTag: languageTag }),
		evidence: m.evidence({ languageTag: languageTag }),
		frameworks: m.frameworks({ languageTag: languageTag }),
		domains: m.domains({ languageTag: languageTag }),
		projects: m.projects({ languageTag: languageTag }),
		users: m.users({ languageTag: languageTag }),
		user: m.user({ languageTag: languageTag }),
		userGroups: m.userGroups({ languageTag: languageTag }),
		roleAssignments: m.roleAssignments({ languageTag: languageTag }),
		xRays: m.xRays({ languageTag: languageTag }),
		scoringAssistant: m.scoringAssistant({ languageTag: languageTag }),
		libraries: m.libraries({ languageTag: languageTag }),
		backupRestore: m.backupRestore({ languageTag: languageTag }),
		myProfile: m.myProfile({ languageTag: languageTag }),
		aboutCiso: m.aboutCiso({ languageTag: languageTag }),
		Logout: m.Logout({ languageTag: languageTag }),
		name: m.name({ languageTag: languageTag }),
		description: m.description({ languageTag: languageTag }),
		parentDomain: m.parentDomain({ languageTag: languageTag }),
		ref: m.ref({ languageTag: languageTag }),
		refId: m.refId({ languageTag: languageTag }),
		businessValue: m.businessValue({ languageTag: languageTag }),
		email: m.email({ languageTag: languageTag }),
		firstName: m.firstName({ languageTag: languageTag }),
		lastName: m.lastName({ languageTag: languageTag }),
		category: m.category({ languageTag: languageTag }),
		eta: m.eta({ languageTag: languageTag }),
		securityFunction: m.securityFunction({ languageTag: languageTag }),
		securityMeasure: m.securityMeasure({ languageTag: languageTag }),
		provider: m.provider({ languageTag: languageTag }),
		domain: m.domain({ languageTag: languageTag }),
		urn: m.urn({ languageTag: languageTag }),
		id: m.id({ languageTag: languageTag }),
		treatmentStatus: m.treatmentStatus({ languageTag: languageTag }),
		currentLevel: m.currentLevel({ languageTag: languageTag }),
		residualLevel: m.residualLevel({ languageTag: languageTag }),
		riskMatrix: m.riskMatrix({ languageTag: languageTag }),
		project: m.project({ languageTag: languageTag }),
		folder: m.folder({ languageTag: languageTag }),
		riskAssessment: m.riskAssessment({ languageTag: languageTag }),
		threat: m.threat({ languageTag: languageTag }),
		framework: m.framework({ languageTag: languageTag }),
		file: m.file({ languageTag: languageTag }),
		language: m.language({ languageTag: languageTag }),
		builtin: m.builtin({ languageTag: languageTag }),
		status: m.status({ languageTag: languageTag }),
		effort: m.effort({ languageTag: languageTag }),
		impact: m.impact({ languageTag: languageTag }),
		expiryDate: m.expiryDate({ languageTag: languageTag }),
		link: m.link({ languageTag: languageTag }),
		createdAt: m.createdAt({ languageTag: languageTag }),
		updatedAt: m.updatedAt({ languageTag: languageTag }),
		acceptedAt: m.acceptedAt({ languageTag: languageTag }),
		rejectedAt: m.rejectedAt({ languageTag: languageTag }),
		revokedAt: m.revokedAt({ languageTag: languageTag }),
		locale: m.locale({ languageTag: languageTag }),
		defaultLocale: m.defaultLocale({ languageTag: languageTag }),
		annotation: m.annotation({ languageTag: languageTag }),
		library: m.library({ languageTag: languageTag }),
		typicalEvidence: m.typicalEvidence({ languageTag: languageTag }),
		parentAsset: m.parentAsset({ languageTag: languageTag }),
		parentAssets: m.parentAssets({ languageTag: languageTag }),
		approver: m.approver({ languageTag: languageTag }),
		state: m.state({ languageTag: languageTag }),
		justification: m.justification({ languageTag: languageTag }),
		parentFolder: m.parentFolder({ languageTag: languageTag }),
		contentType: m.contentType({ languageTag: languageTag }),
		type: m.type({ languageTag: languageTag }),
		lcStatus: m.lcStatus({ languageTag: languageTag }),
		internalReference: m.internalReference({ languageTag: languageTag }),
		isActive: m.isActive({ languageTag: languageTag }),
		dateJoined: m.dateJoined({ languageTag: languageTag }),
		version: m.version({ languageTag: languageTag }),
		treatment: m.treatment({ languageTag: languageTag }),
		rid: m.rid({ languageTag: languageTag }),
		currentProba: m.currentProba({ languageTag: languageTag }),
		currentImpact: m.currentImpact({ languageTag: languageTag }),
		residualProba: m.residualProba({ languageTag: languageTag }),
		residualImpact: m.residualImpact({ languageTag: languageTag }),
		existingMeasures: m.existingMeasures({ languageTag: languageTag }),
		strengthOfKnowledge: m.strengthOfKnowledge({ languageTag: languageTag }),
		dueDate: m.dueDate({ languageTag: languageTag }),
		attachment: m.attachment({ languageTag: languageTag }),
		observation: m.observation({ languageTag: languageTag }),
		planned: m.planned({ languageTag: languageTag }),
		active: m.active({ languageTag: languageTag }),
		inactive: m.inactive({ languageTag: languageTag }),
		addThreat: m.addThreat({ languageTag: languageTag }),
		addSecurityFunction: m.addSecurityFunction({ languageTag: languageTag }),
		addSecurityMeasure: m.addSecurityMeasure({ languageTag: languageTag }),
		addAsset: m.addAsset({ languageTag: languageTag }),
		addRiskAssessment: m.addRiskAssessment({ languageTag: languageTag }),
		addRiskScenario: m.addRiskScenario({ languageTag: languageTag }),
		addRiskAcceptance: m.addRiskAcceptance({ languageTag: languageTag }),
		addComplianceAssessment: m.addComplianceAssessment({ languageTag: languageTag }),
		addEvidence: m.addEvidence({ languageTag: languageTag }),
		addDomain: m.addDomain({ languageTag: languageTag }),
		addProject: m.addProject({ languageTag: languageTag }),
		addUser: m.addUser({ languageTag: languageTag }),
		addPolicy: m.addPolicy({ languageTag: languageTag }),
		associatedThreats: m.associatedThreats({ languageTag: languageTag }),
		associatedSecurityFunctions: m.associatedSecurityFunctions({ languageTag: languageTag }),
		associatedSecurityMeasures: m.associatedSecurityMeasures({ languageTag: languageTag }),
		associatedAssets: m.associatedAssets({ languageTag: languageTag }),
		associatedRiskAssessments: m.associatedRiskAssessments({ languageTag: languageTag }),
		associatedRiskScenarios: m.associatedRiskScenarios({ languageTag: languageTag }),
		associatedRiskAcceptances: m.associatedRiskAcceptances({ languageTag: languageTag }),
		associatedComplianceAssessments: m.associatedComplianceAssessments({
			languageTag: languageTag
		}),
		associatedEvidences: m.associatedEvidences({ languageTag: languageTag }),
		associatedDomains: m.associatedDomains({ languageTag: languageTag }),
		associatedProjects: m.associatedProjects({ languageTag: languageTag }),
		associatedUsers: m.associatedUsers({ languageTag: languageTag }),
		changePassword: m.changePassword({ languageTag: languageTag }),
		label: m.label({ languageTag: languageTag }),
		NA: m.NA({ languageTag: languageTag }),
		threatAgentFactors: m.threatAgentFactors({ languageTag: languageTag }),
		vulnerabilityFactors: m.vulnerabilityFactors({ languageTag: languageTag }),
		businessImpactFactors: m.businessImpactFactors({ languageTag: languageTag }),
		technicalImpactFactors: m.technicalImpactFactors({ languageTag: languageTag }),
		assessmentVector: m.assessmentVector({ languageTag: languageTag }),
		skillLevelText: m.skillLevelText({ languageTag: languageTag }),
		skillLevelChoice1: m.skillLevelChoice1({ languageTag: languageTag }),
		skillLevelChoice2: m.skillLevelChoice2({ languageTag: languageTag }),
		skillLevelChoice3: m.skillLevelChoice3({ languageTag: languageTag }),
		skillLevelChoice4: m.skillLevelChoice4({ languageTag: languageTag }),
		skillLevelChoice5: m.skillLevelChoice5({ languageTag: languageTag }),
		motiveText: m.motiveText({ languageTag: languageTag }),
		motiveChoice1: m.motiveChoice1({ languageTag: languageTag }),
		motiveChoice2: m.motiveChoice2({ languageTag: languageTag }),
		motiveChoice3: m.motiveChoice3({ languageTag: languageTag }),
		opportunityText: m.opportunityText({ languageTag: languageTag }),
		opportunityChoice1: m.opportunityChoice1({ languageTag: languageTag }),
		opportunityChoice2: m.opportunityChoice2({ languageTag: languageTag }),
		opportunityChoice3: m.opportunityChoice3({ languageTag: languageTag }),
		opportunityChoice4: m.opportunityChoice4({ languageTag: languageTag }),
		sizeText: m.sizeText({ languageTag: languageTag }),
		sizeChoice1: m.sizeChoice1({ languageTag: languageTag }),
		sizeChoice2: m.sizeChoice2({ languageTag: languageTag }),
		sizeChoice3: m.sizeChoice3({ languageTag: languageTag }),
		sizeChoice4: m.sizeChoice4({ languageTag: languageTag }),
		sizeChoice5: m.sizeChoice5({ languageTag: languageTag }),
		easeOfDiscoveryText: m.easeOfDiscoveryText({ languageTag: languageTag }),
		easeOfDiscoveryChoice1: m.easeOfDiscoveryChoice1({ languageTag: languageTag }),
		easeOfDiscoveryChoice2: m.easeOfDiscoveryChoice2({ languageTag: languageTag }),
		easeOfDiscoveryChoice3: m.easeOfDiscoveryChoice3({ languageTag: languageTag }),
		easeOfDiscoveryChoice4: m.easeOfDiscoveryChoice4({ languageTag: languageTag }),
		easeOfExploitText: m.easeOfExploitText({ languageTag: languageTag }),
		easeOfExploitChoice1: m.easeOfExploitChoice1({ languageTag: languageTag }),
		easeOfExploitChoice2: m.easeOfExploitChoice2({ languageTag: languageTag }),
		easeOfExploitChoice3: m.easeOfExploitChoice3({ languageTag: languageTag }),
		easeOfExploitChoice4: m.easeOfExploitChoice4({ languageTag: languageTag }),
		awarenessText: m.awarenessText({ languageTag: languageTag }),
		awarenessChoice1: m.awarenessChoice1({ languageTag: languageTag }),
		awarenessChoice2: m.awarenessChoice2({ languageTag: languageTag }),
		awarenessChoice3: m.awarenessChoice3({ languageTag: languageTag }),
		awarenessChoice4: m.awarenessChoice4({ languageTag: languageTag }),
		intrusionDetectionText: m.intrusionDetectionText({ languageTag: languageTag }),
		intrusionDetectionChoice1: m.intrusionDetectionChoice1({ languageTag: languageTag }),
		intrusionDetectionChoice2: m.intrusionDetectionChoice2({ languageTag: languageTag }),
		intrusionDetectionChoice3: m.intrusionDetectionChoice3({ languageTag: languageTag }),
		intrusionDetectionChoice4: m.intrusionDetectionChoice4({ languageTag: languageTag }),
		financialDamageText: m.financialDamageText({ languageTag: languageTag }),
		financialDamageChoice1: m.financialDamageChoice1({ languageTag: languageTag }),
		financialDamageChoice2: m.financialDamageChoice2({ languageTag: languageTag }),
		financialDamageChoice3: m.financialDamageChoice3({ languageTag: languageTag }),
		financialDamageChoice4: m.financialDamageChoice4({ languageTag: languageTag }),
		reputationDamageText: m.reputationDamageText({ languageTag: languageTag }),
		reputationDamageChoice1: m.reputationDamageChoice1({ languageTag: languageTag }),
		reputationDamageChoice2: m.reputationDamageChoice2({ languageTag: languageTag }),
		reputationDamageChoice3: m.reputationDamageChoice3({ languageTag: languageTag }),
		reputationDamageChoice4: m.reputationDamageChoice4({ languageTag: languageTag }),
		nonComplianceText: m.nonComplianceText({ languageTag: languageTag }),
		nonComplianceChoice1: m.nonComplianceChoice1({ languageTag: languageTag }),
		nonComplianceChoice2: m.nonComplianceChoice2({ languageTag: languageTag }),
		nonComplianceChoice3: m.nonComplianceChoice3({ languageTag: languageTag }),
		nonComplianceChoice4: m.nonComplianceChoice4({ languageTag: languageTag }),
		privacyViolationText: m.privacyViolationText({ languageTag: languageTag }),
		privacyViolationChoice1: m.privacyViolationChoice1({ languageTag: languageTag }),
		privacyViolationChoice2: m.privacyViolationChoice2({ languageTag: languageTag }),
		privacyViolationChoice3: m.privacyViolationChoice3({ languageTag: languageTag }),
		privacyViolationChoice4: m.privacyViolationChoice4({ languageTag: languageTag }),
		lossOfConfidentialityText: m.lossOfConfidentialityText({ languageTag: languageTag }),
		lossOfConfidentialityChoice1: m.lossOfConfidentialityChoice1({ languageTag: languageTag }),
		lossOfConfidentialityChoice2: m.lossOfConfidentialityChoice2({ languageTag: languageTag }),
		lossOfConfidentialityChoice3: m.lossOfConfidentialityChoice3({ languageTag: languageTag }),
		lossOfConfidentialityChoice4: m.lossOfConfidentialityChoice4({ languageTag: languageTag }),
		lossOfIntegrityText: m.lossOfIntegrityText({ languageTag: languageTag }),
		lossOfIntegrityChoice1: m.lossOfIntegrityChoice1({ languageTag: languageTag }),
		lossOfIntegrityChoice2: m.lossOfIntegrityChoice2({ languageTag: languageTag }),
		lossOfIntegrityChoice3: m.lossOfIntegrityChoice3({ languageTag: languageTag }),
		lossOfIntegrityChoice4: m.lossOfIntegrityChoice4({ languageTag: languageTag }),
		lossOfIntegrityChoice5: m.lossOfIntegrityChoice5({ languageTag: languageTag }),
		lossOfAvailabilityText: m.lossOfAvailabilityText({ languageTag: languageTag }),
		lossOfAvailabilityChoice1: m.lossOfAvailabilityChoice1({ languageTag: languageTag }),
		lossOfAvailabilityChoice2: m.lossOfAvailabilityChoice2({ languageTag: languageTag }),
		lossOfAvailabilityChoice3: m.lossOfAvailabilityChoice3({ languageTag: languageTag }),
		lossOfAvailabilityChoice4: m.lossOfAvailabilityChoice4({ languageTag: languageTag }),
		lossOfAccountabilityText: m.lossOfAccountabilityText({ languageTag: languageTag }),
		lossOfAccountabilityChoice1: m.lossOfAccountabilityChoice1({ languageTag: languageTag }),
		lossOfAccountabilityChoice2: m.lossOfAccountabilityChoice2({ languageTag: languageTag }),
		lossOfAccountabilityChoice3: m.lossOfAccountabilityChoice3({ languageTag: languageTag }),
		undefined: m.undefined({ languageTag: languageTag }),
		production: m.production({ languageTag: languageTag }),
		development: m.development({ languageTag: languageTag }),
		design: m.design({ languageTag: languageTag }),
		endOfLife: m.endOfLife({ languageTag: languageTag }),
		dropped: m.dropped({ languageTag: languageTag }),
		technical: m.technical({ languageTag: languageTag }),
		physical: m.physical({ languageTag: languageTag }),
		small: m.small({ languageTag: languageTag }),
		large: m.large({ languageTag: languageTag }),
		extraLarge: m.extraLarge({ languageTag: languageTag }),
		policy: m.policy({ languageTag: languageTag }),
		process: m.process({ languageTag: languageTag }),
		composer: m.composer({ languageTag: languageTag }),
		plan: m.plan({ languageTag: languageTag }),
		open: m.open({ languageTag: languageTag }),
		mitigate: m.mitigate({ languageTag: languageTag }),
		accept: m.accept({ languageTag: languageTag }),
		transfer: m.transfer({ languageTag: languageTag }),
		avoid: m.avoid({ languageTag: languageTag }),
	};
	return LOCAL_ITEMS;
}
