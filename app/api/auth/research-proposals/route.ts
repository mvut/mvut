import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        // 1. Destructure with all your fields
        const {
            proposalTitle,
            principalInvestigator,
            piEmail,
            piPhone,
            piPosition,
            institution,
            department,
            coInvestigators,
            researchField,
            subfield,
            durationMonths,
            budgetAmount,
            budgetCurrency,
            abstract,
            background,
            objectives,
            methodology,
            expectedOutcomes,
            timeline,
            ethicalConsiderations,
            references, // This will now map to 'bibliography' column
            supportingDocuments
        } = await request.json();

        // 2. Log received data
        console.log({
            proposalTitle,
            principalInvestigator,
            piEmail,
            piPhone,
            piPosition,
            institution,
            department,
            coInvestigators,
            researchField,
            subfield,
            durationMonths,
            budgetAmount,
            budgetCurrency,
            abstract,
            background,
            objectives,
            methodology,
            expectedOutcomes,
            timeline,
            ethicalConsiderations,
            references,
            supportingDocuments
        });

        // 3. Execute SQL insertion
        await sql`
            INSERT INTO research_proposals (
                proposal_title, principal_investigator, pi_email, pi_phone, pi_position,
                institution, department, co_investigators, research_field, subfield,
                duration_months, budget_amount, budget_currency, abstract, background,
                objectives, methodology, expected_outcomes, timeline,
                ethical_considerations, bibliography, supporting_documents
            ) VALUES (
                         ${proposalTitle}, ${principalInvestigator}, ${piEmail}, ${piPhone}, ${piPosition},
                         ${institution}, ${department}, ${coInvestigators ? JSON.stringify(coInvestigators) : null},
                         ${researchField}, ${subfield}, ${durationMonths}, ${budgetAmount}, ${budgetCurrency},
                         ${abstract}, ${background}, ${objectives ? JSON.stringify(objectives) : null},
                         ${methodology}, ${expectedOutcomes ? JSON.stringify(expectedOutcomes) : null},
                         ${timeline ? JSON.stringify(timeline) : null}, ${ethicalConsiderations},
                         ${references}, ${supportingDocuments ? JSON.stringify(supportingDocuments) : null}
                     )
        `;

        // 4. Return success response
        return NextResponse.json({
            success: true,
            message: "Research proposal submitted successfully! Your proposal is under review."
        });

    } catch (error: any) {
        // 5. Error handling
        console.error('Route Error:', error);

        return NextResponse.json({
            success: false,
            message: "Error: Unable to submit research proposal"
        }, { status: 500 });
    }
}