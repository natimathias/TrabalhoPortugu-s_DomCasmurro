import React from 'react';

const DisciplinaPage = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-justify">
            <h3 className="text-2xl font-semibold text-[#1F2A44]">Professora</h3>

            <h2 className='mt-2 mb-3'>Sandra Elis Aleixo </h2>
            <img className='w-96 h-96' src="/Sandra.jpg" alt="" />

            <p className='mt-3'>
                <b>Formação:</b> Possui graduação em Letras Anglo Portuguesas pela Faculdade
                Estadual de Ciências e Letras de Campo Mourão (1996), especialização em Literatura Brasileira pela
                Faculdade Estadual de Ciências e Letras de Campo Mourão (1998) e mestrado pela Universidade Estadual
                Paulista Júlio de Mesquita Filho (2002). Atualmente é professora da Universidade Tecnológica Federal do
                Paraná.
            </p>
            <h3 className="text-2xl font-semibold text-[#1F2A44] mt-3 mb-2">Disciplina</h3>
            <h2>Língua Portuguesa e Literatura Brasileira</h2>
            
            <p className='mt-3'>
                <b>Lingua Portuguesa:</b> A língua portuguesa é um idioma derivado do latim
                vulgar, sendo oficial em Portugal e Brasil, falada em vários países.É conhecida por suas variações
                regionais e sotaques. Nessa disciplina aprendemos gramática, literatura, produção de texto e
                interpretação de diferentes tipos de textos, como escrever bem e entender o significado de textos
                variados.
                <br />
                <b className='mt-3'>Literatura Brasileira e Redação:</b> Na disciplina de literatura brasileira, os alunos são apresentados a obras literárias de vários perídos da literatura, para que assim possam conhecê-los e identificá-los, além de poder perceber as características de cada período.
                <br />
                Já em redação, os alunos são preparados e treinados para produzirem redações de alto nível, tanto em testes como Enem e vestibulares, quanto em testes da própria matéria escolar. A professora está sempre incentivando a leitura e a escrita de redações para ocorrer cada vez mais melhora.
            </p>
        </div>
    );
};

export default DisciplinaPage;